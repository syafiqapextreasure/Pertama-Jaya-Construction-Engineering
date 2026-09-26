"""Read-only browser checks: no messages sent or form data submitted externally."""
import os,json,re
from pathlib import Path
from urllib.parse import urlparse,parse_qs
from playwright.sync_api import sync_playwright
BASE=os.environ.get('BASE_URL','http://127.0.0.1:4190')
OUT=Path(os.environ.get('EVIDENCE_DIR','../screenshots/pertama-languages'));OUT.mkdir(parents=True,exist_ok=True)
results=[];errors=[]
with sync_playwright() as p:
 browser=p.chromium.launch()
 for width in [375,768,1536]:
  for language in ['en','ms','zh']:
   ctx=browser.new_context(viewport={'width':width,'height':1000})
   ctx.add_init_script(f"if(!localStorage.getItem('pertama-jaya-language')) localStorage.setItem('pertama-jaya-language','{language}')")
   page=ctx.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
   for route in ['/','/tentang-kami','/servis','/portfolio','/hubungi','/not-a-page']:
    page.goto(BASE+route);page.wait_for_timeout(200)
    assert page.locator('h1').count()==1,(route,language)
    assert page.locator('html').get_attribute('lang')==('zh-Hans' if language=='zh' else language)
    assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1'),(route,language,width,'overflow')
    body=page.locator('body').inner_text();assert 'Jayabalan' not in body and 'Santhiran' not in body
    assert page.locator('a[href="tel:+60124342290"]').count()>0,'mobile destination'
    page.locator('img').evaluate_all('(imgs)=>imgs.forEach(i=>i.loading="eager")')
    page.wait_for_function('Array.from(document.images).every(i=>i.complete)',timeout=15000)
    assert page.locator('img').evaluate_all('(imgs)=>imgs.every(i=>i.complete&&i.naturalWidth>0)'),(route,'images')
    page.evaluate('window.scrollTo({top:0,behavior:"instant"})');page.wait_for_timeout(100)
    if route in ['/','/hubungi','/portfolio'] and width in [375,1536]:
     page.screenshot(path=str(OUT/f'{route.strip("/") or "home"}-{language}-{width}.png'),full_page=True)
    results.append({'width':width,'language':language,'route':route,'title':page.locator('h1').inner_text()})
   page.goto(BASE+'/hubungi');page.locator('button[type="submit"]').click();assert ('Please enter your full name.' if language=='en' else '请输入您的姓名。' if language=='zh' else 'Sila masukkan nama penuh anda.') in page.locator('form').inner_text()
   for selector,value in [('#contact-nama','QA User'),('#contact-telefon','0123456789'),('#contact-lokasi','Test site'),('textarea','Test only — do not send')]:page.locator(selector).fill(value)
   page.locator('button[type="submit"]').click();dialog=page.get_by_role('dialog');dialog.wait_for()
   link=dialog.locator('a[href^="https://wa.me/"]').get_attribute('href');assert urlparse(link).path=='/60124342290'
   message=parse_qs(urlparse(link).query)['text'][0];assert 'QA User' in message and 'Test only — do not send' in message
   assert ('Full Name' in message if language=='en' else '姓名' in message if language=='zh' else 'Nama Penuh' in message)
   page.keyboard.press('Escape');assert not page.get_by_role('dialog').count()
   # Switch through the visible selector without reloading; then verify persistence.
   select=page.locator('select[id$="-language"]:visible');select.select_option('en');page.reload();assert page.locator('html').get_attribute('lang')=='en'
   if width==375:
    page.get_by_role('button',name='Open navigation menu').click();assert page.locator('#mobile-navigation').is_visible();page.keyboard.press('Escape');assert not page.locator('#mobile-navigation').count()
   ctx.close()
 # English must be the default in a fresh browser context.
 ctx=browser.new_context();page=ctx.new_page();page.goto(BASE);assert page.locator('html').get_attribute('lang')=='en';ctx.close()
 browser.close()
assert not errors,errors
(OUT/'results.json').write_text(json.dumps({'pages':results,'errors':errors,'contact_links':'passed','language_persistence':'passed'},ensure_ascii=False,indent=2))
(OUT/'SCREENSHOTS.md').write_text('\n'.join(str(f.resolve()) for f in sorted(OUT.glob('*.png')))+'\n')
print(f'PASS {len(results)} page/language/viewport checks; form preview, WhatsApp destination, mobile menu, persistence, English default; no JS errors')

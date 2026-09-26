import os,re
from pathlib import Path
from playwright.sync_api import sync_playwright
BASE=os.environ.get('BASE_URL','http://127.0.0.1:4210')
OUT=Path(os.environ.get('EVIDENCE_DIR','../screenshots/renovation-local'));OUT.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 b=p.chromium.launch()
 for lang,label in [('en','Renovation'),('ms','Ubah Suai'),('zh','翻新')]:
  for width in [375,1440]:
   page=b.new_page(viewport={'width':width,'height':1000});page.add_init_script(f"localStorage.setItem('pertama-jaya-language','{lang}')")
   for route in ['/','/servis','/portfolio','/tentang-kami','/hubungi']:
    page.goto(BASE+route);page.wait_for_timeout(400)
    text=page.locator('body').inner_text();assert not re.search(r'ilustrasi|AI illustration|AI.generated|AI 插|AI生成|p\d+-\d+\.(jpg|webp)',text,re.I),(lang,route)
   page.goto(BASE+'/portfolio');page.wait_for_timeout(400)
   page.locator('main').get_by_role('tab',name=re.compile('^'+label+r'\s*3$')).click()
   imgs=page.locator('main img[src*="/portfolio/renovation/"]');assert imgs.count()==3
   imgs.first.click();page.get_by_role('dialog').wait_for();assert '/renovation/' in page.get_by_role('dialog').locator('img').get_attribute('src')
   page.keyboard.press('ArrowRight');page.keyboard.press('Escape');assert page.get_by_role('dialog').count()==0
   assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1')
   page.evaluate('window.scrollTo({top:0,behavior:"instant"})');page.wait_for_timeout(200)
   page.screenshot(path=str(OUT/f'renovation-portfolio-{lang}-{width}.png'),full_page=True)
   page.goto(BASE+'/servis');page.wait_for_timeout(400)
   assert page.locator('img[src*="/services/renovation/"]').count()==2
   assert page.locator('img[src$="/generated/p28-04.webp"]').count()==1
   page.locator('img').evaluate_all('(imgs)=>imgs.forEach(i=>i.loading="eager")');page.wait_for_function('Array.from(document.images).every(i=>i.complete&&i.naturalWidth>0)')
   assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1')
   page.screenshot(path=str(OUT/f'renovation-services-{lang}-{width}.png'),full_page=True)
   page.close()
 b.close()
print('PASS all 3 languages desktop/mobile: 3-image renovation filter and lightbox, 2 new service images, moved construction image, no AI labels or filenames across 5 routes')

import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { PORTFOLIO_ITEMS } from '../src/data/portfolioData';
import { SERVICES_DATA } from '../src/data/servicesData';
import { HomePage } from '../src/pages/HomePage';
import { PortfolioPage } from '../src/pages/PortfolioPage';
import { ServicesPage } from '../src/pages/ServicesPage';
import { Lightbox } from '../src/components/Lightbox';

const generatedIds = ['p28-02', 'p28-03', 'p28-04', 'p31-01', 'p31-02', 'p31-03'];
for (const item of PORTFOLIO_ITEMS) {
  const generated = generatedIds.includes(item.id);
  assert.equal(item.photoUrl, generated ? `/assets/portfolio/generated/${item.id}.webp` : item.relPath);
  assert.ok(item.relPath.endsWith(`/${item.id}.jpg`), 'Original JPEG must remain accessible');
  assert.equal(item.imageProvenance, generated ? 'ai-generated' : undefined);
  const html = renderToStaticMarkup(<Lightbox item={item} items={PORTFOLIO_ITEMS} currentIndex={0} onClose={() => {}} onPrev={() => {}} onNext={() => {}} />);
  assert.equal(html.includes('Ilustrasi AI'), generated);
  if (generated) {
    assert.ok(html.includes(`href="${item.relPath}"`), 'Generated lightbox must link to original');
    assert.ok(html.includes('bukan foto dokumentasi tapak sebenar'));
  }
}
const home = renderToStaticMarkup(<HomePage onNavigate={() => {}} onOpenWhatsApp={() => {}} />);
const selected = home.slice(home.indexOf('Portfolio Terpilih')).split('</section>')[0];
const selectedSources = [...selected.matchAll(/<img[^>]+src="([^"]+)"/g)].map((match) => match[1]);
assert.deepEqual(selectedSources, ['p30-01', 'p27-01', 'p29-01', 'p28-01', 'p31-01', 'p30-02'].map((id) => PORTFOLIO_ITEMS.find((item) => item.id === id)!.photoUrl));
assert.ok(selected.includes('Sistem Penyejukan &amp; Perpaipan'), 'Cooling equipment must not be captioned as a pump');
assert.ok(home.includes('Ilustrasi AI'));
assert.ok(!home.includes('Paparan rekod kerja pembinaan fizikal dari portfolio sebenar'));
const portfolio = renderToStaticMarkup(<PortfolioPage />);
assert.equal((portfolio.match(/>Ilustrasi AI</g) || []).length, 6);
const mechanical = SERVICES_DATA.find((service) => service.id === 'pam-blower-stp')!;
assert.ok(mechanical.sampleImages.every((src) => src.startsWith('/assets/portfolio/generated/')));
const services = renderToStaticMarkup(<ServicesPage onNavigate={() => {}} onOpenWhatsApp={() => {}} />);
assert.ok(services.includes('Ilustrasi AI'));
console.log('Portfolio display/provenance regression checks passed.');

from playwright.sync_api import sync_playwright
from pathlib import Path
import json
out=Path('artifacts/geo');out.mkdir(parents=True,exist_ok=True)
results=[]
with sync_playwright() as p:
 browser=p.chromium.launch()
 for route in ['landing-geo.html','geo']:
  page=browser.new_page(viewport={'width':1672,'height':941},device_scale_factor=1)
  errors=[];page.on('pageerror',lambda error:errors.append(str(error)))
  page.goto('http://127.0.0.1:3000/'+route,wait_until='networkidle');page.evaluate('document.fonts.ready')
  assert page.locator('.geo-page > section').count()==4
  assert page.locator('.geo-price-card').count()==3
  for width,height in [(1672,941),(1440,900),(1024,768),(768,1024),(390,844),(320,740)]:
   page.set_viewport_size({'width':width,'height':height})
   assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'), str(width)
   overflow=page.locator('.geo-page').evaluate('(root)=>[...root.querySelectorAll("h1,h2,h3,input,button,.geo-price-card,.geo-lead-card")].filter(el=>el.getBoundingClientRect().width && (el.getBoundingClientRect().left < -1 || el.getBoundingClientRect().right > innerWidth+1)).map(el=>el.className)')
   assert not overflow,(width,overflow)
   results.append({'route':route,'width':width,'overflow':False})
  page.set_viewport_size({'width':390,'height':844});page.evaluate('window.scrollTo({top:0,behavior:"instant"})')
  page.get_by_role('button',name='Mở menu',exact=True).click();assert page.locator('#geo-navigation').is_visible()
  page.get_by_role('button',name='Đóng menu',exact=True).click()
  page.locator('.geo-query-card').nth(2).click();assert 'kế toán' in page.locator('.geo-search-line').inner_text()
  page.locator('.geo-price-card').nth(1).get_by_role('button').click()
  form=page.locator('#bottom-audit-form form')
  form.locator('[name=website]').fill('not-a-domain');form.locator('[name=phone]').fill('abc1234567');form.get_by_role('button').click();assert form.get_by_role('alert').is_visible()
  form.locator('[name=website]').fill('example.com');form.locator('[name=phone]').fill('0912345678')
  page.route('https://script.google.com/**',lambda request:request.abort())
  form.get_by_role('button').click();page.wait_for_function('document.querySelector("#bottom-audit-form [role=alert]").textContent.includes("Chưa gửi")')
  assert form.get_by_role('button').is_enabled()
  page.unroute('https://script.google.com/**')
  payloads=[]
  def intercept(request):
   payloads.append(json.loads(request.request.post_data));request.fulfill(status=200,body='ok',headers={'Access-Control-Allow-Origin':'*'})
  page.route('https://script.google.com/**',intercept)
  form.get_by_role('button').click();page.locator('#bottom-audit-form [role=status]').wait_for()
  assert 'GEO Setup' in payloads[0]['packageInterest']
  assert len(payloads)==1
  assert not errors,errors
  results.append({'route':route,'menu':'pass','query':'pass','validation':'pass','network_error':'pass','selected_package':'pass','success_mock':'pass','page_errors':errors})
  page.close()
 page=browser.new_page(viewport={'width':1672,'height':941})
 page.goto('http://127.0.0.1:3000/landing-geo.html',wait_until='networkidle');page.evaluate('document.fonts.ready')
 for name,selector in [('hero','.geo-hero'),('pricing','.geo-pricing'),('value','.geo-value'),('final','.geo-final')]:
  page.locator(selector).evaluate('(el)=>window.scrollTo({top:el.offsetTop-88,behavior:"instant"})')
  page.screenshot(path=str(out/f'final-{name}.png'))
 page.set_viewport_size({'width':390,'height':844});page.evaluate('window.scrollTo({top:0,behavior:"instant"})')
 page.screenshot(path=str(out/'final-mobile.png'),full_page=True)
 # File can be opened directly with adjacent geo assets.
 page.goto(Path('public/landing-geo.html').resolve().as_uri(),wait_until='load')
 assert page.locator('.geo-page > section').count()==4
 assert page.locator('.geo-header img').evaluate('(img)=>img.complete && img.naturalWidth>0')
 results.append({'file_protocol':'pass'})
 browser.close()
(out/'qa-results.json').write_text(json.dumps(results,indent=2),encoding='utf8')
print(json.dumps(results))

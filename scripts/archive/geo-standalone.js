const menu = document.querySelector('.geo-menu');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu'); document.querySelector('#geo-navigation').classList.toggle('is-open', open); });
document.querySelectorAll('#geo-navigation a').forEach(a => a.addEventListener('click', () => { document.querySelector('#geo-navigation').classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); }));
let selectedPackage = 'AI Visibility Audit miễn phí';
function openAudit(name) { selectedPackage = name; document.querySelector('#bottom-audit-form-website').focus({preventScroll:true}); document.querySelector('#bottom-audit-form').scrollIntoView({behavior:'smooth',block:'center'}); }
document.querySelectorAll('.geo-price-card').forEach(card => card.querySelector('button').addEventListener('click', () => openAudit(card.querySelector('h3').textContent + ' ' + card.querySelector('.geo-price').textContent)));
document.querySelector('.geo-audit-strip button').addEventListener('click', () => openAudit('AI Visibility Audit miễn phí'));
document.querySelectorAll('.geo-query-card').forEach(card => card.addEventListener('click', () => { document.querySelectorAll('.geo-query-card').forEach(c => {c.classList.remove('is-selected');c.setAttribute('aria-pressed','false');}); card.classList.add('is-selected');card.setAttribute('aria-pressed','true');document.querySelector('.geo-search-line span').textContent = card.querySelector('span:not(.geo-quote-mark)').textContent; }));
document.querySelectorAll('.geo-lead-card form').forEach(form => form.addEventListener('submit', async e => {
 e.preventDefault(); const button = form.querySelector('button'); if(button.disabled) return;
 const website = form.elements.website.value.trim(); const phone = form.elements.phone.value.replace(/[\s().-]/g,'');
 let error = form.querySelector('[role="alert"]');
 if(!error){error=document.createElement('p');error.className='geo-form-error';error.setAttribute('role','alert');form.insertBefore(error,button);}
 let url; try {url=new URL(/^https?:\/\//i.test(website)?website:'https://'+website);if(!['http:','https:'].includes(url.protocol)||!url.hostname.includes('.')||url.username||url.password)throw Error();} catch {error.textContent='Vui lòng nhập website hợp lệ, ví dụ: tenmien.vn.';return;}
 if(!/^(?:0\d{9}|\+84\d{9})$/.test(phone)){error.textContent='Vui lòng nhập số điện thoại Việt Nam hợp lệ.';return;}
 error.textContent='';const original=button.innerHTML;button.disabled=true;button.textContent='Đang gửi thông tin…';form.setAttribute('aria-busy','true');
 const packageInterest=form.closest('.geo-lead-card').id==='bottom-audit-form'?selectedPackage:'AI Visibility Audit miễn phí';
 const params=new URLSearchParams(location.search);
 try {
 await fetch('https://script.google.com/macros/s/AKfycbxH5cdJvXwsQZ0wvIfY5SW1MU_JwYdPQz0izBPiOezapBIZnlu1WmwEXTItIA1mKnwg/exec',{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},signal:AbortSignal.timeout(15000),body:JSON.stringify({id:'LM-'+Date.now(),createdAt:new Date().toISOString(),fullName:'Khách GEO ('+url.hostname+')',phone,businessName:url.hostname,cityCountry:'Việt Nam',businessCategory:'Chưa phân loại',priorityGoal:'Audit AI Visibility',packageInterest,status:'new',source:location.pathname,utmSource:params.get('utm_source')||'',utmMedium:params.get('utm_medium')||'',utmCampaign:params.get('utm_campaign')||'',utmTerm:params.get('utm_term')||'',utmContent:params.get('utm_content')||'',gclid:params.get('gclid')||'',referrer:document.referrer,userAgent:navigator.userAgent,note:'Website: '+url.href+' | Form: '+form.closest('.geo-lead-card').id})});
 form.innerHTML='<div class="geo-form-result" role="status"><h3>Đã gửi yêu cầu phân tích</h3><p>Bạn có thể liên hệ qua Zalo để xác nhận Localmate đã tiếp nhận và trao đổi thêm về website của bạn.</p><a class="geo-button" href="https://zalo.me/0834422439" target="_blank" rel="noopener noreferrer">Liên hệ qua Zalo ↗</a></div>';
 } catch {error.textContent='Chưa gửi được thông tin. Vui lòng thử lại hoặc liên hệ Zalo 0834.422.439.';button.disabled=false;button.innerHTML=original;} finally {form.setAttribute('aria-busy','false');}
}));

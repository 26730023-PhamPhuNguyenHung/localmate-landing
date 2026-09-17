import React, { useState } from 'react';
import { ArrowRight, Check, Gift, Link as LinkIcon, LockKeyhole, Phone, Search, Send } from 'lucide-react';
import { submitLead } from '../../../services/leadService';
import { CONTACT_INFO } from '../../../data/landingContent';
import { geoCheckpoints } from '../../../data/geoLandingData';
import { Badge } from './GeoShared';
export const GeoLeadFormCard = ({id='hero-audit-form',closing=false,selectedPackage='AI Visibility Audit miễn phí'}:{id?:string;closing?:boolean;selectedPackage?:string}) => {
 const [website,setWebsite]=useState(''); const [phone,setPhone]=useState('');
 const [status,setStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle'); const [error,setError]=useState('');
 const submit=async(e:React.FormEvent)=>{
  e.preventDefault(); if(status==='sending')return;
  let url:URL;
  try { url=new URL(/^https?:\/\//i.test(website.trim())?website.trim():`https://${website.trim()}`); if(!['http:','https:'].includes(url.protocol)||!url.hostname.includes('.')||url.username||url.password)throw new Error(); }
  catch {setError('Vui lòng nhập địa chỉ website hợp lệ, ví dụ: tenmien.vn.');setStatus('error');return;}
  const normalizedPhone=phone.replace(/[\s().-]/g,'');
  if(!/^(?:0\d{9}|\+84\d{9})$/.test(normalizedPhone)){setError('Vui lòng nhập số điện thoại Việt Nam hợp lệ.');setStatus('error');return;}
  setStatus('sending'); setError('');
  try {await submitLead({name:`Khách GEO (${url.hostname})`,phone:normalizedPhone,businessName:url.hostname,serviceInterest:selectedPackage,message:`Đăng ký ${selectedPackage} | Website: ${url.href} | Form: ${id}`,sourcePage:'/geo'},{requireNetworkDelivery:true});setStatus('sent');}
  catch {setError('Chưa gửi được thông tin. Vui lòng thử lại hoặc liên hệ qua Zalo.');setStatus('error');}
 };
 return <div className="geo-lead-card" id={id}>
 <Badge>{closing?<Send size={20}/>:<Gift size={22}/>} {closing?'BẮT ĐẦU NGAY HÔM NAY':'BÁO CÁO AUDIT · MIỄN PHÍ TRẢI NGHIỆM'}</Badge>
 <h2>{closing?<>Nhận AI Visibility Audit <strong>miễn phí</strong></>:<>Kiểm tra miễn phí<br/>thương hiệu của bạn trên AI</>}</h2>
 <p>{closing?'Chỉ cần để lại thông tin, Localmate sẽ phân tích mức độ hiện diện thương hiệu của bạn trên các nền tảng AI và liên hệ gửi kết quả.':'Nhập thông tin để Localmate phân tích mức độ hiện diện của doanh nghiệp bạn trên ChatGPT, Gemini, Perplexity và Google AI.'}</p>
 {!closing&&<ul className="geo-checkpoints">{geoCheckpoints.map(text=><li key={text}><Check size={17}/>{text}</li>)}</ul>}
 {status==='sent'?<div className="geo-form-result" role="status"><Check size={36}/><h3>Đã gửi yêu cầu phân tích</h3><p>Bạn có thể liên hệ Zalo để xác nhận Localmate đã tiếp nhận và trao đổi thêm về website {website}.</p><a href={CONTACT_INFO.zaloUrl} target="_blank" rel="noopener noreferrer" className="geo-button">Liên hệ qua Zalo<ArrowRight size={18}/></a></div>:
 <form onSubmit={submit} aria-busy={status==='sending'}>
 <label className="geo-input"><span className="geo-sr-only">Website của bạn</span><LinkIcon size={21}/><input id={`${id}-website`} name="website" type="text" inputMode="url" autoComplete="url" required maxLength={2048} value={website} onChange={e=>setWebsite(e.target.value)} placeholder="Website của bạn (vd: https://tenmien.vn)" disabled={status==='sending'} aria-describedby={status==='error'?`${id}-error`:undefined}/></label>
 <label className="geo-input"><span className="geo-sr-only">Số điện thoại / Zalo</span><Phone size={20}/><input name="phone" type="tel" autoComplete="tel" required maxLength={20} value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Số điện thoại / Zalo của bạn" disabled={status==='sending'} aria-describedby={status==='error'?`${id}-error`:undefined}/></label>
 {status==='error'&&<p className="geo-form-error" id={`${id}-error`} role="alert">{error} <a href={CONTACT_INFO.zaloUrl}>Zalo Localmate</a></p>}
 <button type="submit" className="geo-button" disabled={status==='sending'}><Search size={23}/>{status==='sending'?'Đang gửi thông tin…':closing?'Nhận phân tích miễn phí':'Kiểm tra ngay miễn phí'}<ArrowRight size={20}/></button>
 </form>}
 <p className="geo-form-privacy"><LockKeyhole size={14}/><a href="/chinh-sach-bao-mat">Thông tin của bạn được bảo mật</a></p>
 </div>;
};

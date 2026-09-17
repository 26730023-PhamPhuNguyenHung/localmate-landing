import React from 'react';
import { BarChart3, Check, Search, Settings, Star } from 'lucide-react';
import { geoPlans } from '../../../data/geoLandingData';
import { GeoButton } from './GeoShared';
export const GeoPricingCard = ({plan,onSelect}:{plan:typeof geoPlans[number];onSelect:()=>void}) => {
 const featured=plan.id==='setup'; const Icon=plan.id==='audit'?Search:featured?Settings:BarChart3;
 return <article className={`geo-price-card ${featured?'is-featured':''}`}>
 {featured&&<div className="geo-popular"><Star size={18} fill="currentColor"/> PHỔ BIẾN NHẤT</div>}
 <div className="geo-price-heading"><span className="geo-icon-tile"><Icon size={34}/></span><div><h3>{plan.name}</h3><p>{plan.subtitle}</p></div></div>
 <p className="geo-price">{plan.prefix&&<small>{plan.prefix} </small>}<b>{plan.price}</b> <small>{plan.unit}</small></p>
 <p className="geo-price-note">{plan.note}</p><ul>{plan.features.map(text=><li key={text}><Check size={17}/><span>{text}</span></li>)}</ul>
 <GeoButton onClick={onSelect} secondary={!featured}>{plan.cta}</GeoButton></article>;
};

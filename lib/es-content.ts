import {pages as sourcePages,livePages as sourceLive,content as sourceContent,faqs as sourceFaqs,markets as sourceMarkets,travel as sourceTravel,funnel} from './content';
import {translate} from './locale';
import {spanishPath,englishPath} from './languages';
import type {Page,Section} from './content';
const t=(s:string)=>translate(s,'es');
export const pages:Page[]=sourcePages.filter(p=>!p.url.startsWith('/es/')).map(p=>({...p,url:spanishPath(p.url),h1:t(p.h1),title:t(p.title),meta:t(p.meta),kind:t(p.kind),links:p.links.split(';').map(u=>u.trim()).filter(Boolean).map(spanishPath).filter((u,i,a)=>a.indexOf(u)===i).join('; ')}));
export const livePages=pages.filter(p=>sourceLive.some(s=>s.url===englishPath(p.url)));
export const content:Record<string,Section[]>=Object.fromEntries(Object.entries(sourceContent).filter(([u])=>!u.startsWith('/es/')).map(([u,rows])=>[spanishPath(u),rows.map(s=>({...s,title:t(s.title),body:t(s.body),items:s.items?.map(t)}))]));
export const faqs=sourceFaqs.map(row=>row.map(t));
export const markets=sourceMarkets.map(([name,slug,description])=>[name,slug,t(description)]);
export const travel=t(sourceTravel);
export function pageFor(url:string){return livePages.find(p=>p.url===url)}
export function quoteUrl(url:string){const kind=funnel(englishPath(url));return spanishPath(kind==='venue'?'/venue-partnership/':kind==='corporate'?'/corporate-quote/':'/private-event-quote/')}

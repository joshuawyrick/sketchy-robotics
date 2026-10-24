import {ArrowUpRight} from 'lucide-react';
import {Shell,Tag,FinalCTA} from './site';
import {Seo} from './seo';
import {content,pageFor,quoteUrl,Section} from '../lib/content';
import {translate,localizedUrl,Locale} from '../lib/locale';

// Both languages intentionally use this single layout and the same asset paths.
export function ServiceMirror({url,sourceUrl,sections,heading}:{url:string;sourceUrl:string;sections?:Section[];heading?:string}){
 const locale:Locale=url.startsWith('/es/')?'es':'en';
 const t=(value:string)=>translate(value,locale);
 const page=pageFor(sourceUrl)!;
 const rows=sections||content[sourceUrl];
 const related=page.links.split(';').map(x=>x.trim()).filter((u,i,a)=>u!==sourceUrl&&!u.startsWith('/es/')&&pageFor(u)&&a.indexOf(u)===i);
 return <Shell locale={locale}><Seo url={url}/><section className="page-hero wrap"><div><div className="breadcrumbs"><a href="/">{t('Home')}</a><span>/</span><span>{t(page.kind.split(' — ')[0])}</span></div><Tag>{t('REAL ROBOTS. REMARKABLE KEEPSAKES.')}</Tag><h1>{heading||t(page.h1)}</h1><p className="intro">{t(page.meta)}</p><a className="btn" href={quoteUrl(sourceUrl)+'?source='+encodeURIComponent(url)}>{t('Let’s Plan Your Experience')} <ArrowUpRight size={18}/></a></div><div className="page-hero-visual"><img src="/assets/neon-robot-human.webp" alt={t('Concept illustration of a robot creating a pen portrait')} width="1299" height="1211"/><span>{t('ILLUSTRATIVE BRAND ART')}</span></div></section>
 <section className="article-content wrap">{rows.map((s,i)=><article className="article-row" key={i}><h2>{t(s.title)}</h2><div><p>{t(s.body)}</p>{s.items&&<ul>{s.items.map(item=><li key={item}>{t(item)}</li>)}</ul>}</div></article>)}</section>
 <section className="wrap page-faq"><h2>{t('A few useful answers.')}</h2><div className="faq-list">{[
 ['Can we choose a theme?','Share your idea when you inquire. Simple themed bodies, artwork and personalization are reviewed for suitability and confirmed in the proposal.'],
 ['Will every guest get a drawing?','That depends on the measured session time, operating window, station configuration and participation demand. We agree on realistic scope rather than promise unlimited drawings.']
 ].map(([q,a])=><details key={q}><summary>{t(q)}<span>+</span></summary><p>{t(a)}</p></details>)}</div></section>
 <section className="related wrap"><Tag>{t('KEEP EXPLORING')}</Tag><div className="related-links">{related.map(u=><a key={u} href={localizedUrl(u,locale)}>{t(pageFor(u)!.h1)}<ArrowUpRight size={16}/></a>)}</div></section><FinalCTA locale={locale}/></Shell>;
}

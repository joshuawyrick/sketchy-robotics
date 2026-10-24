// Generated from components/page-extras.tsx by scripts/generate-spanish.cjs.
import {ContextualFAQ} from "@/components/contextual-faq";
import {pages,livePages,quoteUrl,travel} from "@/lib/es-content";
export function Directory({type}:{type:'guides'|'service-areas'}){const list=livePages.filter(p=>p.url.startsWith('/es/'+type+'/')&&p.url!=='/es/'+type+'/');return <section className="wrap directory section"><h2>{type==='guides'?"Haz un plan digno de celebrar.":"Encuentra la ubicación de tu evento."}</h2><p>{type==='guides'?"Guías prácticas de retratos, circulación y eventos memorables.":"Solicitudes de viaje desde Bakersfield, sujetas a disponibilidad y revisión del recinto."}</p><div className="directory-grid">{list.map(p=><a href={p.url} key={p.url}><strong>{p.h1}</strong><span>{p.meta}</span><b>Explorar →</b></a>)}</div></section>}
export function PageFAQ({url}:{url:string}){return <ContextualFAQ url={url}/>;}

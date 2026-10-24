// Generated from components/local-places.tsx by scripts/generate-spanish.cjs.
import {ArrowUpRight} from 'lucide-react';
import places from "@/content/es-local-places.json";
type LocalArea={title:string;intro:string;places:{name:string;url:string;body:string}[]};
export function LocalPlaces({url}:{url:string}){
 const area=(places as Record<string,LocalArea>)[url];
 if(!area)return null;
 return <section className="local-places wrap" aria-labelledby="local-places-title"><div className="eyebrow">LUGARES LOCALES. IDEAS NUEVAS.</div><h2 id="local-places-title">{area.title}</h2><p className="local-intro">{area.intro}</p><div className="local-place-grid">{area.places.map(place=><article className="local-place" key={place.name}><h3>{place.name}</h3><p>{place.body}</p>{place.url&&<a href={place.url}>Sitio oficial: {place.name}<ArrowUpRight size={16} aria-hidden="true"/></a>}</article>)}</div><p className="fine local-note">Inspiración para planificar, no una lista de clientes o socios. La disponibilidad, aprobación de proveedores y participación deben confirmarse directamente. Consulta los enlaces oficiales para detalles actuales.</p></section>
}

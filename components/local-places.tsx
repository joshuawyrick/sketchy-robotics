import {ArrowUpRight} from 'lucide-react';
import places from '../content/local-places.json';
type LocalArea={title:string;intro:string;places:{name:string;url:string;body:string}[]};
export function LocalPlaces({url}:{url:string}){
 const area=(places as Record<string,LocalArea>)[url];
 if(!area)return null;
 return <section className="local-places wrap" aria-labelledby="local-places-title"><div className="eyebrow">LOCAL PLACES. FRESH IDEAS.</div><h2 id="local-places-title">{area.title}</h2><p className="local-intro">{area.intro}</p><div className="local-place-grid">{area.places.map(place=><article className="local-place" key={place.name}><h3>{place.name}</h3><p>{place.body}</p>{place.url&&<a href={place.url}>Official website: {place.name}<ArrowUpRight size={16} aria-hidden="true"/></a>}</article>)}</div><p className="fine local-note">Local planning inspiration—not a list of our clients or partners. Venue availability, outside-vendor approval and event participation must be confirmed directly. See the official links for current details.</p></section>
}

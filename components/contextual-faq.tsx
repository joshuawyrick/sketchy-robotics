import data from '../content/page-faqs.json';
import {englishPath} from '../lib/languages';
export function ContextualFAQ({url}:{url:string}){const es=url.startsWith('/es/');const rows=(data as Record<string,string[][]>)[englishPath(url)];if(!rows?.length)return null;return <section className="wrap page-faq"><h2>{es?'Preguntas para planear tu experiencia.':'Questions for planning your experience.'}</h2><div className="faq-list">{rows.map(row=><details key={row[0]}><summary>{row[es?2:0]}<span>+</span></summary><p>{row[es?3:1]}</p></details>)}</div></section>}

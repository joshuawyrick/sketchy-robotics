import spanish from './spanish.json';
import {spanishPath} from './languages';
export type Locale='en'|'es';
export const translate=(text:string,locale:Locale='en')=>locale==='es'?(spanish as Record<string,string>)[text]||text:text;
export function localizedUrl(url:string,locale:Locale='en'){return locale==='es'?spanishPath(url):url}

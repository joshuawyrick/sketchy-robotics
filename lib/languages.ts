export const spanishAliases:Record<string,string>={
 '/wedding-caricatures/':'/es/entretenimiento-bodas/',
 '/quinceanera-entertainment/':'/es/entretenimiento-quinceaneras/'
};
export function normalizePath(path:string){return path==='/'?'/':path.replace(/\/+$/,'')+'/'}
export function englishPath(path:string){const p=normalizePath(path);return Object.entries(spanishAliases).find(([,es])=>es===p)?.[0]||(p==='/es/'?'/':p.startsWith('/es/')?p.slice(3):p)}
export function spanishPath(path:string){const p=englishPath(path);return spanishAliases[p]||('/es'+p)}
export function languageAlternates(path:string){const en=englishPath(path);return {canonical:'https://sketchyrobotics.com'+normalizePath(path),languages:{en:'https://sketchyrobotics.com'+en,es:'https://sketchyrobotics.com'+spanishPath(en),'x-default':'https://sketchyrobotics.com'+en}}}

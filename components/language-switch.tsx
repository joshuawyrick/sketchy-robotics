'use client';
import {usePathname} from 'next/navigation';
import {useEffect} from 'react';
import {englishPath,spanishPath} from '../lib/languages';
export function LanguageSwitch(){
 const pathname=usePathname()||'/';const spanish=pathname==='/es'||pathname.startsWith('/es/');
 useEffect(()=>{document.documentElement.lang=spanish?'es':'en'},[spanish]);
 return <div className="language-bar"><nav className="language-switch" aria-label={spanish?'Idioma':'Language'}>
 {spanish?<a href={englishPath(pathname)} hrefLang="en" lang="en">English</a>:<span lang="en" aria-current="true">English</span>}
 {spanish?<span lang="es" aria-current="true">Español</span>:<a href={spanishPath(pathname)} hrefLang="es" lang="es">Español</a>}
 </nav></div>;
}

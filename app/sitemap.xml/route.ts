import {livePages} from '../../lib/content';
import {publicIndexing,canonicalOrigin} from '../../lib/seo-config';
import {spanishPath} from '../../lib/languages';
export const dynamic='force-dynamic';
export function GET(){const paths=[...livePages.filter(p=>!p.url.startsWith('/es/')&&!['/privacy/','/terms/','/request-received/','/404'].includes(p.url)).map(p=>p.url),'/guides/'];const urls=publicIndexing()?paths.flatMap(en=>[en,spanishPath(en)].map(url=>`<url><loc>${canonicalOrigin}${url}</loc><xhtml:link rel="alternate" hreflang="en" href="${canonicalOrigin}${en}"/><xhtml:link rel="alternate" hreflang="es" href="${canonicalOrigin}${spanishPath(en)}"/></url>`)).join(''):'';return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,{headers:{'Content-Type':'application/xml'}})}

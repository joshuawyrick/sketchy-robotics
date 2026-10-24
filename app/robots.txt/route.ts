import {publicIndexing,canonicalOrigin} from '../../lib/seo-config';
export const dynamic='force-dynamic';
export function GET(){return new Response(publicIndexing()?`User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/\nDisallow: /request-received/\nSitemap: ${canonicalOrigin}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n\n# Owner-private staging: public indexing disabled.\n',{headers:{'Content-Type':'text/plain'}})}

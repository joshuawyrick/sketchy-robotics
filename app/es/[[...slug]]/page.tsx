import {notFound,permanentRedirect} from 'next/navigation';
import ContentPage from '@/generated/es/content-page';
import HomePage from '@/generated/es/home-page';
import GuidesPage from '@/generated/es/guides-page';
import {pageFor} from '@/lib/es-content';
import {englishPath,spanishPath,languageAlternates} from '@/lib/languages';
import {publicIndexing} from '@/lib/seo-config';
export const dynamic='force-dynamic';
type Props={params:Promise<{slug?:string[]}>;searchParams:Promise<Record<string,string|undefined>>};
export async function generateMetadata({params}:Props){const {slug=[]}=await params;const url='/es/'+(slug.length?slug.join('/')+'/':'');const p=pageFor(url);const home=url==='/es/',guides=url==='/es/guides/';const title=home?'Sketchy Robotics | Caricaturas robóticas en Bakersfield y California':guides?'Guías para bodas y eventos | Sketchy Robotics':p?.title||'Página no encontrada | Sketchy Robotics';const description=home?'Robots reales dibujan retratos a bolígrafo para bodas, fiestas y empresas. Desde Bakersfield, para el centro y sur de California.':guides?'Planifica retratos, actividades, ferias y pilotos con las guías prácticas de Sketchy Robotics.':p?.meta;return {title,description,alternates:languageAlternates(url),openGraph:{title,description,url:'https://sketchyrobotics.com'+url,locale:'es_US',alternateLocale:'en_US',images:[{url:'/assets/neon-robot-human.webp'}]},robots:{index:publicIndexing()&&!!(p||home||guides)&&!['/privacy/','/terms/','/request-received/'].includes(englishPath(url)),follow:publicIndexing()}}}
export default async function SpanishRoute({params,searchParams}:Props){const {slug=[]}=await params;const url='/es/'+(slug.length?slug.join('/')+'/':'');if(url==='/es/gallery/')permanentRedirect('/es/artwork-gallery/');const canonical=spanishPath(url);if(canonical!==url)permanentRedirect(canonical);if(url==='/es/')return <HomePage/>;if(url==='/es/guides/')return <GuidesPage/>;if(!pageFor(url))notFound();return <ContentPage params={Promise.resolve({slug:['es',...slug]})} searchParams={searchParams}/>}

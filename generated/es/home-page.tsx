// Generated from app/page.tsx by scripts/generate-spanish.cjs.
import {languageAlternates} from "@/lib/languages";
import {Home} from "@/generated/es/site";
import {Seo} from "@/generated/es/seo";
import {publicIndexing} from "@/lib/seo-config";
export const dynamic='force-dynamic';
export async function generateMetadata(){return {title:"Sketchy Robotics | Alquiler de robots caricaturistas en Bakersfield y California",description:"Robots reales dibujan retratos a bolígrafo para bodas, fiestas y eventos empresariales. Desde Bakersfield, para el centro y sur de California.",alternates:languageAlternates('/'),robots:{index:publicIndexing(),follow:publicIndexing()}};}
export default function Page(){return <><Seo url="/es/"/><Home/></>}

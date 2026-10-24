// Generated from app/guides/page.tsx by scripts/generate-spanish.cjs.
import {languageAlternates} from "@/lib/languages";
import {Shell,Tag,FinalCTA} from "@/generated/es/site";
import {Directory} from "@/generated/es/page-extras";
import {publicIndexing} from "@/lib/seo-config";
export function generateMetadata(){return {title:"Guías para bodas y eventos | Sketchy Robotics",description:"Planifica retratos, actividades de boda, activaciones en ferias y pilotos con las guías prácticas de Sketchy Robotics.",alternates:languageAlternates("/es/guides/"),robots:{index:publicIndexing(),follow:publicIndexing()}}}
export default function Guides(){return <Shell><section className="wrap section"><Tag>BUENAS IDEAS. PLANES REALES.</Tag><h1>Un poco de inspiración.<br/>Muchas menos dudas.</h1></section><Directory type="guides"/><FinalCTA/></Shell>}

import {languageAlternates} from '../lib/languages';
import {Home} from '../components/site';
import {Seo} from '../components/seo';
import {publicIndexing} from '../lib/seo-config';
export const dynamic='force-dynamic';
export async function generateMetadata(){return {title:'Sketchy Robotics | Robot Caricature Rentals in Bakersfield & California',description:'Real robots draw real pen portraits for weddings, parties and corporate events. Based in Bakersfield, serving Central and Southern California.',alternates:languageAlternates('/'),robots:{index:publicIndexing(),follow:publicIndexing()}};}
export default function Page(){return <><Seo url="/"/><Home/></>}

import {languageAlternates} from '../../lib/languages';
import {Shell,Tag,FinalCTA} from '../../components/site';
import {Directory} from '../../components/page-extras';
import {publicIndexing} from '../../lib/seo-config';
export function generateMetadata(){return {title:'Event & Wedding Planning Guides | Sketchy Robotics',description:'Plan guest portraits, wedding activities, trade-show activations and venue pilots with practical Sketchy Robotics guides.',alternates:languageAlternates('/guides/'),robots:{index:publicIndexing(),follow:publicIndexing()}}}
export default function Guides(){return <Shell><section className="wrap section"><Tag>GOOD IDEAS. REAL PLANS.</Tag><h1>A little inspiration.<br/>A lot less guesswork.</h1></section><Directory type="guides"/><FinalCTA/></Shell>}

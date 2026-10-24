import {ArrowUpRight} from 'lucide-react';
import {Shell} from '../components/site';
export default function NotFound(){return <Shell><div className="notfound"><div className="eyebrow" style={{justifyContent:'center'}}>404 / OFF THE PAGE</div><h1>This sketch went<br/>off the page.</h1><p>Let’s get you back to the good stuff: real robots, personal portraits and memorable events.</p><a href="/" className="btn">Back to home <ArrowUpRight size={16} aria-hidden="true"/></a></div></Shell>}

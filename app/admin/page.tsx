import {ArrowUpRight} from 'lucide-react';
import {owner} from '../../lib/server';
import {chatGPTSignInPath} from '../chatgpt-auth';
import {AdminApp} from '../../components/admin-app';
export const dynamic='force-dynamic';
export const metadata={title:'Owner Workspace | Sketchy Robotics',robots:{index:false,follow:false}};
export default async function Admin(){const user=await owner();if(!user)return <main className="notfound"><h1>Owner workspace.</h1><p>Sign in with the owner’s ChatGPT account. Access is tied to the owner identity, not simply to anyone who signs in.</p><a className="btn" href={chatGPTSignInPath('/admin/')} target="_top">Sign in with ChatGPT <ArrowUpRight size={16} aria-hidden="true"/></a><p className="fine">If you are signed in and still see this screen, owner setup is required.</p><a className="text-link" href="/">Back to website</a></main>;return <AdminApp name={user.displayName}/>}

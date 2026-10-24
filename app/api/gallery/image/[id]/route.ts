import {env} from 'cloudflare:workers';
import {getDb} from '../../../../../db';
import {galleryItems} from '../../../../../db/schema';
import {owner} from '../../../../../lib/server';
import {eq} from 'drizzle-orm';
export const dynamic='force-dynamic';
export async function GET(req:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;if(!/^[a-f0-9-]{36}$/.test(id))return new Response('Not found',{status:404});const item=await getDb().select().from(galleryItems).where(eq(galleryItems.id,id)).get();if(!item||(item.state!=='published'&&!await owner()))return new Response('Not found',{status:404});const object=await env.BUCKET?.get(item.objectKey);if(!object)return new Response('Not found',{status:404});return new Response(object.body,{headers:{'Content-Type':item.mime,'X-Content-Type-Options':'nosniff','Cache-Control':'private, no-store'}})}

import {owner,sameOrigin,audit} from '../../../../lib/server';
import {getDb} from '../../../../db';
import {quotes,leads} from '../../../../db/schema';
import {eq,desc} from 'drizzle-orm';
import {z} from 'zod';
export const dynamic='force-dynamic';
export async function GET(){if(!await owner())return Response.json({error:'Owner access required'},{status:403});return Response.json(await getDb().select().from(quotes).orderBy(desc(quotes.createdAt)),{headers:{'Cache-Control':'no-store'}})}
const schema=z.object({leadId:z.string().uuid(),title:z.string().min(3).max(200),lines:z.array(z.object({label:z.string().min(1).max(150),quantity:z.number().min(.01).max(100000),unitPrice:z.number().min(0).max(1000000)})).min(1).max(50)});
export async function POST(req:Request){if(!sameOrigin(req))return Response.json({error:'Invalid origin'},{status:403});const u=await owner();if(!u)return Response.json({error:'Owner access required'},{status:403});let data;try{data=schema.parse(await req.json())}catch{return Response.json({error:'Check the proposal lines.'},{status:400})}const db=getDb();if(!await db.select().from(leads).where(eq(leads.id,data.leadId)).get())return Response.json({error:'Lead not found'},{status:404});const total=data.lines.reduce((sum,l)=>sum+Math.round(l.quantity*l.unitPrice*100),0);const id=crypto.randomUUID();await db.insert(quotes).values({id,leadId:data.leadId,title:data.title,lines:JSON.stringify(data.lines),total,createdAt:new Date().toISOString()});await audit(data.leadId,u.userId,'proposal_draft_created',id);return Response.json({id,total})}

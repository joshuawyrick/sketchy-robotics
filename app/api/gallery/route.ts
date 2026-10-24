import {getDb} from '../../../db';
import {galleryItems as g} from '../../../db/schema';
import {eq,asc,desc} from 'drizzle-orm';
export const dynamic='force-dynamic';
export async function GET(){return Response.json(await getDb().select({id:g.id,title:g.title,titleEs:g.titleEs,caption:g.caption,captionEs:g.captionEs,alt:g.alt,altEs:g.altEs,category:g.category,kind:g.kind,featured:g.featured}).from(g).where(eq(g.state,'published')).orderBy(desc(g.featured),asc(g.position),asc(g.createdAt)),{headers:{'Cache-Control':'no-store'}})}

// Generate Spanish renderers from the English templates: identical markup, assets and behavior.
// Do not hand-edit generated/es. Add translations to lib/spanish.json and run this script.
const fs=require('fs'),path=require('path'),ts=require('typescript');
const root=path.resolve(__dirname,'..');const dictionary=JSON.parse(fs.readFileSync(path.join(root,'lib/spanish.json'),'utf8'));
const aliases={'/wedding-caricatures/':'/es/entretenimiento-bodas/','/quinceanera-entertainment/':'/es/entretenimiento-quinceaneras/'};
const toEs=u=>u.startsWith('/es/')?u:aliases[u]||'/es'+u;
const files={'components/site.tsx':'site.tsx','components/site-client.tsx':'site-client.tsx','components/quote-form.tsx':'quote-form.tsx','components/page-extras.tsx':'page-extras.tsx','components/local-places.tsx':'local-places.tsx','components/capacity-calculator.tsx':'capacity-calculator.tsx','components/seo.tsx':'seo.tsx','app/[...slug]/page.tsx':'content-page.tsx','app/guides/page.tsx':'guides-page.tsx','app/page.tsx':'home-page.tsx','app/not-found.tsx':'not-found.tsx'};
const destinations=Object.fromEntries(Object.entries(files).map(([a,b])=>[a,'generated/es/'+b]));
function str(s){if(s==='/')return s;if(dictionary[s.trim()])return s.replace(s.trim(),dictionary[s.trim()]);if(s.startsWith('/')&&!s.startsWith('//')&&!s.startsWith('/assets/')&&!s.startsWith('/api/')&&s.endsWith('/'))return toEs(s);return s;}
fs.mkdirSync(path.join(root,'generated/es'),{recursive:true});
for(const [file,out] of Object.entries(files)){
 let source=fs.readFileSync(path.join(root,file),'utf8');const tree=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);const edits=[];
 function walk(n){
  if(ts.isStringLiteral(n)){
   let value=n.text;
   if(ts.isImportDeclaration(n.parent)){
    if(value.startsWith('.')){const resolved=path.posix.normalize(path.posix.join(path.posix.dirname(file),value));const target=destinations[resolved+'.tsx']||destinations[resolved+'.ts'];value=target?'@/'+target.replace(/\.tsx?$/,''):resolved==='lib/content'?'@/lib/es-content':resolved==='content/local-places.json'?'@/content/es-local-places.json':'@/'+resolved;}
   }else if(ts.isJsxAttribute(n.parent)&&['className','id','name','value','type','role','rel','style','d','viewBox'].includes(n.parent.name.getText(tree))){return;}
   else if(value==='/'&&ts.isJsxAttribute(n.parent)&&['href','url'].includes(n.parent.name.getText(tree)))value='/es/';
   else if(value==='en'&&(file==='components/site.tsx'||file==='components/seo.tsx'||file==='components/site-client.tsx'))value='es';
   else if(value==='guides'||value==='service-areas')value=value; // directory keys stay stable; paths are localized below
   else value=str(value);
   if(value!==n.text)edits.push([n.getStart(tree),n.getEnd(),JSON.stringify(value)]);
  }else if(ts.isJsxText(n)){
   const raw=n.getText(tree),trim=raw.trim();const translated=dictionary[trim];if(translated&&translated!==trim)edits.push([n.getStart(tree),n.getEnd(),raw.replace(trim,translated)]);
  }
  ts.forEachChild(n,walk);
 }
 walk(tree);for(const [start,end,value] of edits.sort((a,b)=>b[0]-a[0]))source=source.slice(0,start)+value+source.slice(end);
 if(file==='components/seo.tsx')source=source.replace("if(url!=='/'&&p)","if(url!=='/es/'&&p)").replace("name:\"Inicio\",item:'https://sketchyrobotics.com/'","name:\"Inicio\",item:'https://sketchyrobotics.com/es/'");
 if(file==='components/site.tsx')source=source.replace('Dales un motivo<br/>algo de qué<br/>dejar de deslizar.', 'Dales algo<br/>que les haga<br/>dejar de deslizar.');
 // These dynamic route prefixes are assembled from stable directory keys.
 if(file==='components/page-extras.tsx')source=source.replaceAll("'/'+type+'/'","'/es/'+type+'/'");
 if(file==='components/quote-form.tsx'){
  source=source.replace("'use client';","'use client';\nimport {translate} from '@/lib/locale';");
  source=source.replace("e instanceof Error?e.message:","e instanceof Error?translate(e.message,'es'):");
  source=source.replace("' of '","' de '");
  source=source.replace("{k.replaceAll('_',' ')}","{reviewLabel(k)}");
  source=source.replace("type Kind=", "const reviewLabels:Record<string,string>="+JSON.stringify({name:'Nombre',email:'Correo',phone:'Teléfono',city:'Ciudad',event_type:'Tipo de evento',overnight:'Pernoctación',event_date:'Fecha',end_date:'Fecha final',venue:'Recinto',zip:'Código postal',guests:'Invitados',hours:'Horario',organization:'Organización',event_name:'Nombre del evento',venue_type:'Tipo de recinto',visitors:'Visitantes',timing:'Fechas del piloto',setting:'Entorno',style_notes:'Ideas de retrato',budget:'Presupuesto',notes:'Detalles',robots:'Estaciones',booth:'Estand',branding:'Marca',staffing:'Personal',model:'Modelo de colaboración',space:'Espacio y electricidad',consent:'Consentimiento de contacto',marketing:'Novedades por correo'})+";\nconst reviewLabel=(key:string)=>reviewLabels[key]||key;\ntype Kind=");
  source=source.replace("const payload={...data,", "const payload={...data,preferred_language:'es',");
 }
 fs.writeFileSync(path.join(root,'generated/es',out),'// Generated from '+file+' by scripts/generate-spanish.cjs.\n'+source);
}
const local=JSON.parse(fs.readFileSync(path.join(root,'content/local-places.json'),'utf8'));const translated=Object.fromEntries(Object.entries(local).map(([u,a])=>[toEs(u),{...a,title:str(a.title),intro:str(a.intro),places:a.places.map(p=>({...p,body:str(p.body)}))}]));fs.writeFileSync(path.join(root,'content/es-local-places.json'),JSON.stringify(translated,null,2)+'\n');
console.log('Generated Spanish templates and 19 local-area sections.');

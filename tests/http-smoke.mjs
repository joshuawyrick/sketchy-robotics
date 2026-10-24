import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
const origin=process.env.TEST_ORIGIN||'http://terminal.local:4173';
const post=(body,originHeader=origin)=>fetch(origin+'/api/inquiries',{method:'POST',headers:{'Content-Type':'application/json',Origin:originHeader},body:JSON.stringify(body)});
const common={name:'QA API Test',email:'qa-api@example.invalid',consent:'true',city:'Bakersfield',idempotency:randomUUID(),source:'/service-areas/bakersfield-ca/'};
for(const type of ['private','corporate','venue']){const body={...common,type,idempotency:randomUUID(),event_date:'2027-05-15',zip:'93308',organization:'QA test organization',event_name:'QA test event',venue_type:'Museum'};const res=await post(body);assert.equal(res.status,201,await res.clone().text());const saved=await res.json();assert.match(saved.reference,/^SK-[A-Z0-9]+$/);const replay=await post(body);assert.equal(replay.status,200);assert.equal((await replay.json()).reference,saved.reference);console.log('PASS',type,'persistence and idempotent replay',saved.reference)}
assert.equal((await post({...common,type:'private',zip:'93308',event_date:'2027-05-15',consent:'false'})).status,400);
assert.equal((await post({...common,type:'private',zip:'93308',event_date:'2027-05-15'},'https://evil.invalid')).status,403);
assert.equal((await post({...common,type:'private',zip:'93308',event_date:'2027-05-15',website_confirm:'spam'})).status,400);
for(const route of ['/api/admin/leads','/api/admin/content','/api/admin/quotes'])assert.equal((await fetch(origin+route)).status,403,route);
assert.equal((await fetch(origin+'/service-areas/fresno-ca/')).status,404);
assert.equal((await fetch(origin+'/does-not-exist/')).status,404);
console.log('PASS invalid consent, cross-origin, honeypot, anonymous admin denial, draft/missing 404');

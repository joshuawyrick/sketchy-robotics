import test from 'node:test';
import assert from 'node:assert/strict';
import {privateOvernightCharge,safeSource} from '../lib/rules.ts';
for(const [m,n,a] of [[139,2,0],[140,1,0],[140.01,1,500],[190,0,0],[190,2,1000],[0,0,0]])test(`private overnight ${m} miles / ${n} nights`,()=>assert.deepEqual(privateOvernightCharge(m,n),{amount:a,review:false}));
for(const [m,n]of [[null,null],[-1,1],[200,-1],[200,1.5],[NaN,1],[200,null]])test(`invalid/missing travel needs review ${m} / ${n}`,()=>assert.deepEqual(privateOvernightCharge(m,n),{amount:null,review:true}));
test('corporate bypass never applies private fee',()=>assert.deepEqual(privateOvernightCharge(250,2,'corporate'),{amount:null,review:true}));
test('source attribution removes query PII',()=>assert.equal(safeSource('/weddings/?email=private@example.com'),'/weddings/'));

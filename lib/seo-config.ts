import {env} from 'cloudflare:workers';
export const canonicalOrigin='https://sketchyrobotics.com';
export function publicIndexing(){return (env as unknown as Record<string,string|undefined>).PUBLIC_INDEXING_ENABLED==='true'}

import { Bitpost } from './bitpost';

export interface Bitposts {
  "total": number,
  "limit": number,
  "skip": number,
  "data": Array<Bitpost>
}

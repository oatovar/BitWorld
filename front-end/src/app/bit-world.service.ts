import { Injectable } from '@angular/core';

import { BitPost } from './models/bit-post';
import { Observable, of } from 'rxjs';

import { mockPosts } from './mock-posts';
import { BitTextPost } from './models/bit-text-post';

@Injectable({
  providedIn: 'root'
})
export class BitWorldService {
  constructor() { }

  getPosts(): Observable<BitTextPost[]>{
    return of(mockPosts);
  }

}

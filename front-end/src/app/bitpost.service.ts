import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitpostService {
  url = 'http://api.imjustatech.com/bitposts';
  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.url);
  }
}

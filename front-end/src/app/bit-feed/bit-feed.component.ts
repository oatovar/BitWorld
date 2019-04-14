import { Component, OnInit } from '@angular/core';
import { BitWorldService } from 'app/bit-world.service';
import { BitPost } from '../models/bit-post';

@Component({
  selector: 'app-bit-feed',
  templateUrl: './bit-feed.component.html',
  styleUrls: ['./bit-feed.component.css']
})
export class BitFeedComponent implements OnInit {

  posts: BitPost[];

  constructor(private bitService: BitWorldService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void{
    this.bitService.getPosts().subscribe(posts => this.posts = posts);
  }

}

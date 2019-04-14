import { Component, OnInit, Input } from '@angular/core';

import { BitPost } from '../models/bit-post';

@Component({
  selector: 'app-bit-post',
  templateUrl: './bit-post.component.html',
  styleUrls: ['./bit-post.component.css']
})
export class BitPostComponent implements OnInit {
  @Input() bitPost: BitPost;

  posts: BitPost[];

  constructor() { }

  ngOnInit() {
    
  }

}

import { Post } from './../../models/post.model';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  showPosts() {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

}

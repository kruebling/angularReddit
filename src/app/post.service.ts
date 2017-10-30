import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
  }

  getPosts() {
    return this.posts;
  }

  getPostById(postKey: string) {
    // for (let post of this.posts) {
    //   if (post.id === postId) {
    //     return post;
    //   }
    // }

    return this.database.object('posts/' + postKey);
  }

  addPost(title, author, subReddit, url, body) {
    POSTS.push(new Post(title, author, subReddit, url, body))
  }
}

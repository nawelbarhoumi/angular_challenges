import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  // Add new post (used in add-post component)
  addPost(postData: any){
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push(postData);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  // Get all posts (used in list-post component)
  getAllPosts(){
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    return posts;
  }

  // Get post by index (used in update-post component)
  getPostByIndex(i: any){
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    let postData = posts[i];
    return postData;
  }

  // Update post by index (used in update-post component)
  updatePostByIndex(index: any, updatePostData: any){
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.splice(index, 1, updatePostData);
    localStorage.setItem('posts', JSON.stringify(posts));

  }
  deletePost(i: any){
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.splice(i, 1);
    localStorage.setItem('posts', JSON.stringify(posts))
  }
}

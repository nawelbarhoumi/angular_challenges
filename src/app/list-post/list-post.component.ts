import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  posts = JSON.parse(localStorage.getItem('posts') || '[]');
  constructor() { }

  ngOnInit(): void {
  }

  deletePost(id:any){
    let index = this.posts.findIndex((x:any)=> x.id == id);
    this.posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(this.posts))
  }

}
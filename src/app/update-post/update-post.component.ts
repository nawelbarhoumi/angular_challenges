import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  index :any;
  submitted = false;
  updatePostForm: FormGroup = new FormGroup({
    titre: new FormControl((''), [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(8)]),
    categorie: new FormControl(),
    date:new FormControl('',Validators.required),
  });

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private PostService:PostService) { }

  ngOnInit(): void {

    this.index = this.activatedRoute.snapshot.params['i'];
    console.log(this.index);
    
    this.loadPostData();
  }

  loadPostData()
  {
    let postData = this.PostService.getPostByIndex(this.index);
    this.updatePostForm.patchValue(postData);
  }

  savePost()
  {
    this.submitted = true;
    if(this.updatePostForm.invalid)
    {
      return ;
    }

  
    let updatePostData = this.updatePostForm.value;

    this.PostService.updatePostByIndex(this.index, updatePostData);

    this.updatePostForm.reset();
    this.submitted = false;

    // redirect to list
     this.router.navigate(['/list-post'])

  }
}

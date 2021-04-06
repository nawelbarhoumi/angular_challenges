import { Component, OnInit } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{ActivatedRoute, Router} from '@angular/router';
import{PostService} from '../services/post.service'
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  
  submitted = false;
  addPostForm: FormGroup = new FormGroup({
    titre: new FormControl((''), [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(8)]),
    categorie: new FormControl(''),
    date:new FormControl('',Validators.required),
  });

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  
  savePost()
  {
    this.submitted = true;
    if(this.addPostForm.invalid)
    {
      return ;
    }

    

    let postData = this.addPostForm.value;

    this.postService.addPost(postData)

    this.addPostForm.reset();
    this.submitted = false;
    this.router.navigate(['/list-post'])

  }
}

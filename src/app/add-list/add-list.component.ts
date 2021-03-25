import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {

  // @Output() deleteEvent= new EventEmitter<number>()

  submitted=false;
  users: any[] =[];
  showUpdateButton=false;
  index: any;
  addListForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userDescription: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  addUser(){
    this.submitted = true;
    if(this.addListForm.invalid)
    {
      return ;
    }
    
    this.users.push(this.addListForm.value);
    this.addListForm.reset();
    this.submitted = false;
  }

  showUserData(i:any){
    // console.log(i);
    const userData = this.users[i];
    // console.log(userData);
    this.addListForm.patchValue(userData);
    this.showUpdateButton= true;
    this.index=i;
  }

  saveUpdate(){
    this.submitted = true;
    if(this.addListForm.invalid)
    {
      return ;
    }
    this.showUpdateButton = false;
    this.users.splice(this.index, 1, this.addListForm.value);
    this.addListForm.reset();
    this.submitted=false;
  }

  deleteUser(i: any){
    this.users.splice(i, 1);
  }

}

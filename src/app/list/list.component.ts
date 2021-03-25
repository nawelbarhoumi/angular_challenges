import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() usersList: any;
  @Output() updateEvent= new EventEmitter<number>()
  @Output() deleteEvent= new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  updateUser(i:any){
    this.updateEvent.emit(i);
  }

  deleteUser(i: any){
    this.deleteEvent.emit(i);
  }

}

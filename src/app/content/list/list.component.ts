import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  username: string | undefined;
  users: any;
  emails:any | undefined

  constructor(  private userService: ListService) { }

  ngOnInit(): void {
    this.username = this.userService.username;
    this.getUsers();
    this.emails=this.userService.email
  }
  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        
        this.users = res;
      })}
    getUsersEmail() {
      this.userService.getUsersEmail().subscribe(res=>{
        this.emails=res;
      })}
    


}

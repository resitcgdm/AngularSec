import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  username: string = 'Reşit';
  apiUrl: string = 'https://jsonplaceholder.typicode.com';
  email:string ='resitcgdm';

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(this.apiUrl + '/users');
   
  }
  getUsersEmail(){
    return this.http.get(this.apiUrl + '/users/email');
  }
}

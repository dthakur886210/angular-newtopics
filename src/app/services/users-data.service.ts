import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
   url = "http://localhost:3000/users";
  constructor(private http : HttpClient) { }
  users(){
    let httpheader = new HttpHeaders({
      'contenttype' : 'application/json',
      'Authorization' : '123456789o'
    })
    return this.http.get(this.url, {headers: httpheader});
  }
  saveUsers(data :any){
 return this.http.post(this.url, data);
  }
}

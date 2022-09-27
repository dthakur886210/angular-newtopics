import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return[
      {name : "Deepak thakur", age : 27, email: "deepak@test.com"},
      {name : "ameen ", age : 26, email: "ameen@test.com"},
      {name : "krutik ", age : 25, email: "krutik@test.com"},
      {name : "mahesh ", age : 24, email: "mahesh@test.com"},
      {name : "hitesh ", age : 24, email: "hitesh@test.com"},
      {name : "pravesh ", age : 23, email: "pravesh@test.com"},
      {name : "dheeraj ", age : 22, email: "dheeraj@test.com"},

    ]
  }
}

import { Injectable } from '@angular/core';
import { dataType } from '../user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getData(){
    const data : dataType = {
      name : "deepak thakur",
      id : 100,
      indian : true,
      address : "lane no.1, jammu kashmir"
    }
    return data;
  }
  constructor() { }
}

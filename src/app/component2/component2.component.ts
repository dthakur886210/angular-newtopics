import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  users : any
  constructor(private userData : UsersDataService) { 
    userData.users().subscribe((data)=>{console.warn(data);
    this.users = data;
  });
}

  ngOnInit(): void {
  }

}

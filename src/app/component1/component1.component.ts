import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
   users : any
  constructor(private userData : UsersDataService) { 
    userData.users().subscribe((data)=>{console.warn(data);
    this.users = data;
  });
    
  }

  ngOnInit(): void {
  }

}

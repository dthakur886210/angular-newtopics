import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  users : any
  constructor(private userData : UsersDataService) { 
    userData.users().subscribe((data)=>{console.warn(data);
    this.users = data;
  });
}

  ngOnInit(): void {
  }
  getUserFormData(data : any){
   this.userData.saveUsers(data).subscribe((result)=>{
    console.warn(result);
    
   })
   
  }

}

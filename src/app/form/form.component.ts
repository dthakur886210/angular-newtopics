import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
 userData :any ={};
  ngOnInit(): void {
  }
  getData(userData : NgForm){
    console.log(userData);
    
    this.userData = userData;
  }

}

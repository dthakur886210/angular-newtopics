import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('loginForm')myForm : any 

  constructor() { }
  ngOnInit(): void {
    this.myForm ={
      name :' deepak Thakur'
    }
  }
    userLogin(item : any){
      console.warn(item);
      
      
    }
}

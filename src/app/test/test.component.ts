import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
a : number[] = [];
b : any[] =[];
  constructor() { }
  testForm = new FormGroup({
    name : new FormControl(''),
    address : new FormControl('')
  })
  testUser(){
    console.warn(this.testForm.value.address);
    this.a.push();
    
  }
  // get name(){
  //   return this.testForm.get('name');
  // }
  // get adddress(){
  //   return this.testForm.get('address');
  // }


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';

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
    name : new FormControl('', [Validators.required, Validators.minLength(5)]),
    address : new FormControl('',  [Validators.required, Validators.minLength(10)])
  })
  testUser(){
    console.warn(this.testForm.value);
    this.a.push();
    
  }
  get name(){
    return this.testForm.get('name');
  }
  get adddress(){
    return this.testForm.get('address');
  }
 remove(){
  this.testForm.get('name')?.clearValidators();
  this.testForm.get('name')?.updateValueAndValidity();
  this.testForm.get('address')?.clearValidators();
  this.testForm.get('address')?.updateValueAndValidity();
 }
 setVal(){
  this.testForm.get('name')?.addValidators([Validators.required, Validators.minLength(5)]);
  this.testForm.get('name')?.updateValueAndValidity();
  this.testForm.get('address')?.addValidators([Validators.required, Validators.minLength(10)]);
  this.testForm.get('address')?.updateValueAndValidity();

 }

  ngOnInit(): void {
  }

}

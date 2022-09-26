import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refrence-variable',
  templateUrl: './template-refrence-variable.component.html',
  styleUrls: ['./template-refrence-variable.component.css']
})
export class TemplateRefrenceVariableComponent implements OnInit {

  constructor() { }
  getVal(item : any){
    console.warn(item);
    

  }
  ngOnInit(): void {
  }

}

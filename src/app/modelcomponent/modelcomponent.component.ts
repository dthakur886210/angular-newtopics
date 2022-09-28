import { Component, OnInit } from '@angular/core';
interface dataType{
  name : string,
  id : number,
  indian : boolean,
  address : any
}
@Component({
  selector: 'app-modelcomponent',
  templateUrl: './modelcomponent.component.html',
  styleUrls: ['./modelcomponent.component.css']
})
export class ModelcomponentComponent implements OnInit {

  constructor() { }
  getData(){
    const data : dataType = {
      name : "deepak thakur",
      id : 100,
      indian : true,
      address : "lane no.1, jammu kashmir"
    }
    return data;
  }
  ngOnInit(): void {
  }

}

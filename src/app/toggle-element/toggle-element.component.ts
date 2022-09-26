import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-element',
  templateUrl: './toggle-element.component.html',
  styleUrls: ['./toggle-element.component.css']
})
export class ToggleElementComponent implements OnInit {
   display = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.display = !this.display;
  }
}

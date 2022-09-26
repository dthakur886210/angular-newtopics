import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, OnChanges {
  isChild = true;
  channelName = '';

  constructor() {
    console.log('parent constructor is called ');
  }

  ngOnInit(): void {
    console.log('parent oninit is called');
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('Parent onchanges is called');
  }
  toggleChild() {
    this.isChild = !this.isChild;
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('Parent docheck is called');
  }
  // thats why we should avoid the ngonchange and docheck lifecycle in one component, because they sometimes create the infinite loop
}

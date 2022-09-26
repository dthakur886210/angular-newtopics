import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-cild',
  templateUrl: './cild.component.html',
  styleUrls: ['./cild.component.css']
})
export class CildComponent implements OnInit, OnDestroy, OnChanges {
  counter :number = 0;
  interval : any;
   @Input() channelName = "";
  constructor() { 
    console.log("child constructor is called");
    
  }

  ngOnInit(): void {
    console.log("child oninit is called");
  //  this.interval =  setInterval(()=>{
  //     this.counter = this.counter +1;
  //     console.log(this.counter);
  //   },1000); 
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.interval);
    console.log("Child ondestroy is called ");
    
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("child onchanges is called");
    
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("Child docheck is called");
    
  }

}

import { Component, OnInit, OnDestroy, OnChanges, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-cild',
  templateUrl: './cild.component.html',
  styleUrls: ['./cild.component.css']
})
export class CildComponent implements OnInit, OnDestroy, OnChanges {
  counter :number = 0;
  interval : any;
   @Input() channelName = "";
   @ContentChild('projectedContent') projectedContent : any;
  constructor() { 
    console.log("child constructor is called");
    
  }

  ngOnInit(): void {
    console.log("child oninit is called");
    console.log("oninit -" + this.projectedContent);
    
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
    console.log("ondestroy -" + this.projectedContent);
    
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("child onchanges is called");
    console.log("onchanges -" + this.projectedContent);
    
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("Child docheck is called");
    console.log("docheck -" + this.projectedContent);
    
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("in after content init");
    console.log("ngAftercontentinit -" + this.projectedContent);
    
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("in aftercontentchecked");
    
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("in afterviewInit");
    
  }
ngAfterViewChecked(): void {
  //Called after every check of the component's view. Applies to components only.
  //Add 'implements AfterViewChecked' to the class.
  console.log("in afterViewChecked");
  
}
}

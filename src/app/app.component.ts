import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-practice';
  constructor(private viewContainer : ViewContainerRef,
    private cfr : ComponentFactoryResolver){}
   async loadlazyAdmin(){
    this.viewContainer.clear();
    const {LazycomponentAdminComponent} = await import('./lazycomponent-admin/lazycomponent-admin.component');
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(LazycomponentAdminComponent)
    )
    }
    async loadlazyUser(){
      this.viewContainer.clear();
      const {LazycomponentUserComponent} = await import('./lazycomponent-user/lazycomponent-user.component');
      this.viewContainer.createComponent(
        this.cfr.resolveComponentFactory(LazycomponentUserComponent)
      )
      }

}

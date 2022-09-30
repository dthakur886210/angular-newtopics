import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyuserRoutingModule } from './lazyuser-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
 console.warn("lazyuser module is here ");
 

@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    LazyuserRoutingModule
  ]
})
export class LazyuserModule { }

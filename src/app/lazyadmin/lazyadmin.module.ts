import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyadminRoutingModule } from './lazyadmin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

console.warn("lazyadmin module");


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    LazyadminRoutingModule
  ]
})
export class LazyadminModule {
 
 }

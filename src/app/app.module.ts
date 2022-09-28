import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { FormComponent } from './form/form.component';
import { ModelcomponentComponent } from './modelcomponent/modelcomponent.component';
import { PersonModule } from './person/person.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    FormComponent,
    ModelcomponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PersonModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

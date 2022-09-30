import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TestComponent } from './test/test.component';
import { LazycomponentUserComponent } from './lazycomponent-user/lazycomponent-user.component';
import { LazycomponentAdminComponent } from './lazycomponent-admin/lazycomponent-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    FormComponent,
    ModelcomponentComponent,
    TestComponent,
    LazycomponentUserComponent,
    LazycomponentAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PersonModule,
    AdminModule,
    UserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

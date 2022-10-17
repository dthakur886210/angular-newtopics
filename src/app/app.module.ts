import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ToggleElementComponent } from './toggle-element/toggle-element.component';
import { TemplateRefrenceVariableComponent } from './template-refrence-variable/template-refrence-variable.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FooterComponent } from './footer/footer.component';
import { Test000Component } from './test000/test000.component';
import { TwowayBindComponent } from './twoway-bind/twoway-bind.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ToggleElementComponent,
    TemplateRefrenceVariableComponent,
    PipesComponent,
    CustomPipePipe,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    FooterComponent,
    Test000Component,
    TwowayBindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

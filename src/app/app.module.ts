import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ToggleElementComponent } from './toggle-element/toggle-element.component';
import { TemplateRefrenceVariableComponent } from './template-refrence-variable/template-refrence-variable.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ToggleElementComponent,
    TemplateRefrenceVariableComponent,
    PipesComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ValidFormComponent } from './Components/valid-form/valid-form.component';
import { ReactFormComponent } from './Components/react-form/react-form.component';
import { TemplateFormComponent } from './Components/template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidFormComponent,
    ReactFormComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { perroComponent } from './perro/perro.component';
import { ElefanteComponent } from './elefante/elefante.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    PagesComponent,
    perroComponent,
    ElefanteComponent,

  ],   
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class PagesModule { }

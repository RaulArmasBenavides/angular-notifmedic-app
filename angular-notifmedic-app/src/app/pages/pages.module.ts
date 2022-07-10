import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatopacienteComponent } from './datopaciente/datopaciente.component';
import { DatomedicamentoComponent } from './datomedicamento/datomedicamento.component';
import { DatomedicamentootrosComponent } from './datomedicamentootros/datomedicamentootros.component';
import { DatoreaccionComponent } from './datoreaccion/datoreaccion.component';
import { DatonotifComponent } from './datonotif/datonotif.component';



@NgModule({
  declarations: [
    PagesComponent,
    DatopacienteComponent,
    DatomedicamentoComponent,
    DatomedicamentootrosComponent,
    DatoreaccionComponent,
    DatonotifComponent
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

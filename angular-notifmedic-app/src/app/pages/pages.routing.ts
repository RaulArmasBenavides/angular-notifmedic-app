import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DatopacienteComponent } from './datopaciente/datopaciente.component';
import { DatomedicamentoComponent } from './datomedicamento/datomedicamento.component';
import { DatomedicamentootrosComponent } from './datomedicamentootros/datomedicamentootros.component';
import { DatoreaccionComponent } from './datoreaccion/datoreaccion.component';
import { DatonotifComponent } from './datonotif/datonotif.component';

const routes: Routes = [
    { 
        path: 'pages', 
        component: PagesComponent,
        // canActivate: [ AuthGuard ],
        children: [
            { path: '', component: DatopacienteComponent, data: { titulo: 'Dashboard' } },
            // Mantenimientos
            { path: 'Datopaciente', component: DatopacienteComponent, data: { titulo: 'Datos del Paciente' }},
            { path: 'Datomedicamento', component: DatomedicamentoComponent, data: { titulo: 'Datos de Medicamento' }},
            { path: 'Datomedicamentootros', component: DatomedicamentootrosComponent, data: { titulo: 'Datos de Otros Medicamentos' }},
            { path: 'Datoreaccion', component: DatoreaccionComponent, data: { titulo: 'Datos de la reacción' }},
            { path: 'Datonotif', component: DatonotifComponent, data: { titulo: 'Datos Notificador' }},
        ]
    },
];




@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


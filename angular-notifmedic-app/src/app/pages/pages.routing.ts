import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { perroComponent } from './perro/perro.component';
import { PagesComponent } from './pages.component';
import { ElefanteComponent } from './elefante/elefante.component';

const routes: Routes = [
    { 
        path: 'pages', 
        component: PagesComponent,
        // canActivate: [ AuthGuard ],
        children: [
            { path: '', component: perroComponent, data: { titulo: 'Dashboard' } },
            // Mantenimientos
            { path: 'perros', component: perroComponent, data: { titulo: 'Matenimiento de perros' }},
            { path: 'elefante', component: ElefanteComponent, data: { titulo: 'Matenimiento de elefantes' }},
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


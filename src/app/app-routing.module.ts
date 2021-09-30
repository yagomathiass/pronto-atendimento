import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicaRoutes } from './clinica';

export const router : Routes = [
    {
        path: '',
        redirectTo: '/clinica/listar',
        pathMatch: 'full'
    },
    
    ...ClinicaRoutes // Junta as rotas.. Concatena tudo
];

@NgModule({
    imports :[ RouterModule.forRoot(router)],
    exports :[ RouterModule]
})

export class AppRoutingModule {}
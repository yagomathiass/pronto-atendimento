import { Routes } from '@angular/router';
import { EditarEnfermoComponent } from './editar';
import { CadastrarEnfermoComponent } from './cadastrar';
import { ListarEnfermosComponent } from './listar';

const routes : Routes = [];

export const ClinicaRoutes : Routes = [
{
    path:'pacientes',
    redirectTo: 'clinicas/listar',
},
{
    path:'clinicas/listar',
    component: ListarEnfermosComponent
},
{
    path:'clinicas/cadastrar',
    component: CadastrarEnfermoComponent
},
{
    path: 'clinicas/editar/:id',
    component: EditarEnfermoComponent
}
];
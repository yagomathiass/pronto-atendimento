import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoService, CadastroAtendidoDirective } from './shared';
import { ListarEnfermosComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarEnfermoComponent } from './cadastrar';
import { EditarEnfermoComponent } from './editar';


@NgModule({
  declarations: [
    ListarEnfermosComponent,
    CadastrarEnfermoComponent,
    EditarEnfermoComponent,
    CadastroAtendidoDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    AtendimentoService
  ],
})
export class ClinicaModule { }

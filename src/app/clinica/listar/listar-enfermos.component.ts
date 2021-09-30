import { Component, OnInit } from '@angular/core';
import { AtendimentoService, Cadastro } from '../shared';

@Component({
  selector: 'app-listar-enfermos',
  templateUrl: './listar-enfermos.component.html',
  styleUrls: ['./listar-enfermos.component.css']
})


export class ListarEnfermosComponent implements OnInit {

  cadastros: Cadastro[];

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(){
    this.cadastros = this.listarTodos();
  }

  listarTodos(): Cadastro[]{
    return this.atendimentoService.listarTodos();
  }

  alterarStatus(enfermo:Cadastro) : void {
    if(confirm('Marcar como Atendido " '+ enfermo.nome +' "?')){
      this.atendimentoService.alterarStatus(enfermo.id);
      this.cadastros = this.listarTodos();
    } else{
      this.cadastros = this.listarTodos();
    }
  }

  alta($event: any, enfermo: Cadastro): void{
    $event.preventDefault();
    if(confirm('Deseja finalizar tratamendo do paciente" '+ enfermo.nome +' "?  ')){
      this.atendimentoService.alta(enfermo.id);
      this.cadastros = this.listarTodos();
    } else {
      this.cadastros = this.listarTodos();
    }
  }

}

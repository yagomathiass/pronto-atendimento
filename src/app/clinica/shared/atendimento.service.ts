import { Injectable } from '@angular/core';
import { Cadastro } from './clinica.model';

@Injectable()

export class AtendimentoService {
  hide(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  
  listarTodos(): Cadastro[] {
    const enfermos = localStorage['pacientes'];
    return enfermos ? JSON.parse(enfermos) : [];
  }

  cadastrar(enfermo:Cadastro): void{
    const enfermos = this.listarTodos();
    enfermo.id = new Date().getTime();
    enfermos.push(enfermo);
    localStorage['pacientes'] = JSON.stringify(enfermos);
  }

  buscarPorId(id:number):Cadastro{
    // "const enfermos" é um array que vai conter objetos do tipo cadastro.
    const enfermos : Cadastro[] = this.listarTodos();
    return enfermos.find(enfermo => enfermo.id === id);
  }

  atualizar(enfermo: Cadastro): void{
    const enfermos : Cadastro[] = this.listarTodos();
    enfermos.forEach((obj, index, objs) =>{
      if(enfermo.id === obj.id){
        objs[index] = enfermo;
      };
    });
    localStorage['pacientes'] = JSON.stringify(enfermos);
  };

  alta(id: number): void {
    let enfermos: Cadastro[] = this.listarTodos();
    enfermos.forEach((obj, index, objs) =>{
      if (id === obj.id){
        objs[index].ativo = !obj.ativo;
      }
    });
    localStorage['pacientes'] = JSON.stringify(enfermos);
  };

  alterarStatus(id: number):void {
    const enfermos: Cadastro[] = this.listarTodos();
    enfermos.forEach((obj, index, objs) =>{
      if (id === obj.id){
        objs[index].atendido = !obj.atendido;
      }
    });
    localStorage['pacientes'] = JSON.stringify(enfermos);
  }
  

}

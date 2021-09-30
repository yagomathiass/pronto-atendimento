import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; //Pacote especíico do angular para formlário
import { AtendimentoService, Cadastro } from '../shared';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar-enfermo',
  templateUrl: './cadastrar-enfermo.component.html',
  styleUrls: ['./cadastrar-enfermo.component.css']
})
export class CadastrarEnfermoComponent implements OnInit {
  @ViewChild('formCadastro', {static:true})formCadastro: NgForm; //Permite a vaidação. Só conseguirei cadastrar se os campos estiverem válidos
  cadastro: Cadastro;

  constructor(private atendimentoService: AtendimentoService, private router: Router) { }

  ngOnInit(): void {
    this.cadastro = new Cadastro()
  }

  cadastrar():void{
    if(this.formCadastro.form.valid){
      this.atendimentoService.cadastrar(this.cadastro);
      this.router.navigate(["/pacientes"])
    }
  }
}


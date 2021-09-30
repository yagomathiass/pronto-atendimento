import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtendimentoService, Cadastro } from '../shared';

@Component({
  selector: 'app-editar-enfermo',
  templateUrl: './editar-enfermo.component.html',
  styleUrls: ['./editar-enfermo.component.css']
})
export class EditarEnfermoComponent implements OnInit {
  @ViewChild('formCadastro', {static:true})formCadastro: NgForm;
  enfermos: Cadastro;

    constructor(
      private atendimentoService: AtendimentoService,
      private route: ActivatedRoute,
      private router: Router
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.enfermos = this.atendimentoService.buscarPorId(id);
  }

  atualizar(): void {
    if(this.formCadastro.form.valid){
      this.atendimentoService.atualizar(this.enfermos);
      this.router.navigate(['/pacientes']);
    }
  }

}

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[cadastroAtendido]'
})

export class CadastroAtendidoDirective implements OnInit {

  @Input() cadastroAtendido:boolean;

  constructor(private el:ElementRef) { }

  ngOnInit(){
    if(this.cadastroAtendido){
      this.el.nativeElement.style.color = "green";
    }
  }
}

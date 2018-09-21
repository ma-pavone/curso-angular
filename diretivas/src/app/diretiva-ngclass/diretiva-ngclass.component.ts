import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

// ngClass

  ehmeufavorito = false;
  constructor() { }


  // ngStyle
ativo = false;
tamanhoFonte = 10;

  ngOnInit() {
  }

  // ngClass
onClick() {
this.ehmeufavorito = !this.ehmeufavorito;
}


// ngStyle

mudarAtivo() {
  this.ativo = !this.ativo;
}
}

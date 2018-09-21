    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-data-binding',
      templateUrl: './data-binding.component.html',
      styleUrls: ['./data-binding.component.css']
    })
    export class DataBindingComponent implements OnInit {

    valorAtual = '';
    nome = 'abc';
    pessoa = {
      nome: 'Marcelo',
      idade: 20
    };

    valorSalvo;
    nomeDoCurso = 'Angular';
    isMouseOver = false;
    valorInicial = 15;

    onMouseOverOut() {
      this.isMouseOver = !this.isMouseOver;
    }

    botaoClicado() {
      alert('Botão Clicado');
    }

    onKeyUp(evento: KeyboardEvent) {
      this.valorAtual = (<HTMLInputElement>evento.target).value;
    }

    salvarValor(valor) {
      this.valorSalvo = valor;
    }
    onMudouValor(evento) {

      console.log(evento.novoValor);
    }

      constructor() { }

      ngOnInit() {
      }

    }

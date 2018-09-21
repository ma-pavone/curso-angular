import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-custom',
  templateUrl: './diretivas-custom.component.html',
  styleUrls: ['./diretivas-custom.component.css']
})
export class DiretivasCustomComponent implements OnInit {
  mostrarCursos = false;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
}
  constructor() { }

  ngOnInit() {
  }

}

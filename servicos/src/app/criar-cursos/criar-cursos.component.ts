import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrls: ['./criar-cursos.component.css'],

  // providers: [CursosService]
})
export class CriarCursosComponent implements OnInit {

  cursos = [];

  @ViewChild('cursoInput') cursoInput: ElementRef;

  constructor(private _cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
  }

  onAddCurso(curso: string) {
    this._cursosService.addCursos(curso);
    this.cursoInput.nativeElement.value = '';
  }

}

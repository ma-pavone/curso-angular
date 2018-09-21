import { Injectable, EventEmitter, Component } from '@angular/core';
import { LogService } from '../shared/log.service';


@Injectable()
export class CursosService {
  static criouNovoCurso = new EventEmitter<string>();
  // emitirCursoCriado = new EventEmitter<string>();

  private cursos = ['Angular', 'Java', 'Phonegap'];

  constructor(private _logService: LogService) {
    console.log('CursosService');
  }
  getCursos() {
    this._logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCursos(curso) {
    this._logService.consoleLog(/* 'Criando um novo curso ' + curso */ ` Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    // this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}

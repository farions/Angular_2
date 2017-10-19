import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {
  listaLibros: Array<string>;

  constructor() { }

  getLibros(libro) {
    this.listaLibros = [
      'Angula 4',
      'Todo Angular',
      'Angular para expertos'
    ];
    return (this.listaLibros);
  }

}

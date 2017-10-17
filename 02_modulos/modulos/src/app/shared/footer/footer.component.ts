import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  formador: string;
  empresa: string;
  fecha: string;

  // iyección de dependencias.
  constructor() { }

  // los valores se las propiedades se inicializan en ngOnInit por el ciclo de vida de los componentes.
  ngOnInit() {
    this.formador = 'Alejandro Cerezo Lasne';
    this.empresa = 'Icono Training Consulting';
    this.fecha = '2017';
  }

}

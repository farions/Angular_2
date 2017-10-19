import { LibrosService } from '../services/libros.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public claveBusqueda: string;
  public aResultados: Array<any>;

  constructor(private svBuscar: LibrosService) { }

  ngOnInit() {
    this.claveBusqueda = '';
    this.aResultados = [];
  }

  btnBuscar() {
    this.aResultados = this.svBuscar.getLibros(this.claveBusqueda);
  }

}

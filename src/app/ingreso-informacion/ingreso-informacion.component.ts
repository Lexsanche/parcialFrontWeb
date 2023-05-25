import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ingreso-informacion',
  templateUrl: './ingreso-informacion.component.html',
  styleUrls: ['./ingreso-informacion.component.css']
})
export class IngresoInformacionComponent {
  titulo: string;
  referencia: string;
  autor: string;
  precio: number;
  ubicacion: string;

  constructor(private http: HttpClient) { }

  guardarLibro() {
    const libro = {
      titulo: this.titulo,
      referencia: this.referencia,
      autor: this.autor,
      precio: this.precio,
      ubicacion: this.ubicacion
    };

    
  }
}

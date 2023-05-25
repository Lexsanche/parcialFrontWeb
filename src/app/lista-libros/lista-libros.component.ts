import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {
  libros: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/libros').subscribe((response: any[]) => {
      this.libros = response;
    });
  }
}

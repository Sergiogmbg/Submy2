import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// INCLUIR EL MODELO DE SUSCRIPCIONES

@Injectable({
  providedIn: 'root'
})
export class ServicioSuscripcionesService {

  constructor(private http: HttpClient) { }

  getSuscripciones(): Observable<any> {
    return this.http.get('http://localhost:3000/suscripciones');
  }
}

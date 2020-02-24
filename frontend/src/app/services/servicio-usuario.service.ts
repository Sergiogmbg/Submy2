import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ModeloUsuarioService {

  constructor(private http: HttpClient) { } 
 // crear usuarios
  saveUsuario(usuario: Usuario): Observable<any>{
    console.log('usuario desde el servicio-usuario.service.ts');
    console.log(usuario);
    return this.http.post('http://localhost:3000/crearUser', usuario);

  }

// obtener el login
  getLogin(usuario: Usuario): Observable<any> {
    return this.http.post('http://localhost:3000/login', usuario);
  }


}

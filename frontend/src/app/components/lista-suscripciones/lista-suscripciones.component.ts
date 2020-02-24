import { Component, OnInit } from '@angular/core';
import { ServicioSuscripcionesService } from 'src/app/services/servicio-suscripciones.service';
import { Suscripcion } from 'src/app/modelo/Suscripcion';
import * as $ from 'jquery';

@Component({
  selector: 'app-lista-suscripciones',
  templateUrl: './lista-suscripciones.component.html',
  styleUrls: ['./lista-suscripciones.component.css']
})
export class ListaSuscripcionesComponent implements OnInit {

  public suscripciones: Suscripcion;
  public now = new Date();

  constructor(private servicioSuscripciones: ServicioSuscripcionesService) { }

  ngOnInit() {
    this.servicioSuscripciones.getSuscripciones().subscribe(
      res => {
        this.suscripciones = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  // Calcula el porcentaje de la barra en función de los días que quedan hasta la fechaExpiración
  calcularDias(fecha) {
    console.log(fecha);
    const fechaExp = new Date(fecha);
    const diasRestantes = (fechaExp.getTime() - this.now.getTime()) / (1000 * 3600 * 24);
    console.log('Días restantes: ' + Math.round(diasRestantes));

    // Calcula el procentaje, inicialmente saca un porcentaje revertido, que se calcula en la línea siguiente
    const porcentajeRevertido = Math.round((diasRestantes * 100) / 30);
    const porcentaje = 100 - porcentajeRevertido;

    console.log('Porcentaje: ' + porcentaje);
    return porcentaje;
  }

}

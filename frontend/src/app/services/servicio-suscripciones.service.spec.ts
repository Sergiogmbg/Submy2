import { TestBed } from '@angular/core/testing';

import { ServicioSuscripcionesService } from './servicio-suscripciones.service';

describe('ServicioSuscripcionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioSuscripcionesService = TestBed.get(ServicioSuscripcionesService);
    expect(service).toBeTruthy();
  });
});

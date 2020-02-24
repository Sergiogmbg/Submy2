import { TestBed } from '@angular/core/testing';

import { ModeloUsuarioService } from './servicio-usuario.service';

describe('ServicioLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModeloUsuarioService = TestBed.get(ModeloUsuarioService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OcorrenciaService } from './ocorrencia.service';

describe('OcorrenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OcorrenciaService = TestBed.get(OcorrenciaService);
    expect(service).toBeTruthy();
  });
});

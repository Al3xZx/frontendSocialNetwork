import { TestBed } from '@angular/core/testing';

import { UtenteDataService } from './utente-data.service';

describe('UtenteDataService', () => {
  let service: UtenteDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtenteDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { WellProcedureService } from './well-procedure.service';

describe('WellProcedureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WellProcedureService = TestBed.get(WellProcedureService);
    expect(service).toBeTruthy();
  });
});

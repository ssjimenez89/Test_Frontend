import { TestBed } from '@angular/core/testing';

import { AppointmenttypeService } from './appointmenttype.service';

describe('AppointmenttypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppointmenttypeService = TestBed.get(AppointmenttypeService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PersonServerService } from './person-server.service';

describe('PersonServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonServerService = TestBed.get(PersonServerService);
    expect(service).toBeTruthy();
  });
});

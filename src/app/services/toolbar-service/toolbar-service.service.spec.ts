import { TestBed } from '@angular/core/testing';

import { ToolbarServiceService } from './toolbar-service.service';

describe('ToolbarServiceService', () => {
  let service: ToolbarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolbarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

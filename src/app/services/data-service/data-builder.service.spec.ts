import { TestBed } from '@angular/core/testing';

import { DataBuilderService } from './data-builder.service';

describe('DataBuilderService', () => {
  let service: DataBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

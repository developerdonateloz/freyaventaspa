import { TestBed } from '@angular/core/testing';

import { ProductitemsService } from './productitems.service';

describe('ProductitemsService', () => {
  let service: ProductitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

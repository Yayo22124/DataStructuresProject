import { TestBed } from '@angular/core/testing';

import { OrderPreparationService } from './order-preparation.service';

describe('OrderPreparationService', () => {
  let service: OrderPreparationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderPreparationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OrderRegisterService } from './order-register.service';

describe('OrderRegisterService', () => {
  let service: OrderRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

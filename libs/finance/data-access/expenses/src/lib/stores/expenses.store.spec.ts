import { TestBed } from '@angular/core/testing';

import { ExpensesStore } from './expenses.store';

describe('ExpensesStoreService', () => {
  let service: ExpensesStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpensesStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

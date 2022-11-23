import { TestBed } from '@angular/core/testing';

import { BranchDepartmentService } from './branch-department.service';

describe('BranchDepartmentService', () => {
  let service: BranchDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

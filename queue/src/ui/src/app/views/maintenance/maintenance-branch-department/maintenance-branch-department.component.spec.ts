import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceBranchDepartmentComponent } from './maintenance-branch-department.component';

describe('MaintenanceBranchDepartmentComponent', () => {
  let component: MaintenanceBranchDepartmentComponent;
  let fixture: ComponentFixture<MaintenanceBranchDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceBranchDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceBranchDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

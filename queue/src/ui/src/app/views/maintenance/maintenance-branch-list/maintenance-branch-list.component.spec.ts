import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceBranchListComponent } from './maintenance-branch-list.component';

describe('MaintenanceBranchListComponent', () => {
  let component: MaintenanceBranchListComponent;
  let fixture: ComponentFixture<MaintenanceBranchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceBranchListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceBranchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceQueueComponent } from './maintenance-queue.component';

describe('MaintenanceQueueComponent', () => {
  let component: MaintenanceQueueComponent;
  let fixture: ComponentFixture<MaintenanceQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

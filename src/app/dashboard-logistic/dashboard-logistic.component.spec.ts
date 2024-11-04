import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLogisticComponent } from './dashboard-logistic.component';

describe('DashboardLogisticComponent', () => {
  let component: DashboardLogisticComponent;
  let fixture: ComponentFixture<DashboardLogisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLogisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLogisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

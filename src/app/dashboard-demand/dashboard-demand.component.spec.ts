import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDemandComponent } from './dashboard-demand.component';

describe('DashboardDemandComponent', () => {
  let component: DashboardDemandComponent;
  let fixture: ComponentFixture<DashboardDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDemandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

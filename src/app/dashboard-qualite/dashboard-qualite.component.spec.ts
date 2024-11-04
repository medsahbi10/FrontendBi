import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardQualiteComponent } from './dashboard-qualite.component';

describe('DashboardQualiteComponent', () => {
  let component: DashboardQualiteComponent;
  let fixture: ComponentFixture<DashboardQualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardQualiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardQualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

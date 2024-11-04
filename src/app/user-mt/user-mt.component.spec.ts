import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMTComponent } from './user-mt.component';

describe('UserMTComponent', () => {
  let component: UserMTComponent;
  let fixture: ComponentFixture<UserMTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

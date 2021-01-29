import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGymClassesComponent } from './nav-gym-classes.component';

describe('NavGymClassesComponent', () => {
  let component: NavGymClassesComponent;
  let fixture: ComponentFixture<NavGymClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavGymClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGymClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

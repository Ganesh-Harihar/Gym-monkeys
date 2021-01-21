import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymInstructorsComponent } from './gym-instructors.component';

describe('GymInstructorsComponent', () => {
  let component: GymInstructorsComponent;
  let fixture: ComponentFixture<GymInstructorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymInstructorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

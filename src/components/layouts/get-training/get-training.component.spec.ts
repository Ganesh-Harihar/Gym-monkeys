import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTrainingComponent } from './get-training.component';

describe('GetTrainingComponent', () => {
  let component: GetTrainingComponent;
  let fixture: ComponentFixture<GetTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

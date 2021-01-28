import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryAboutUsComponent } from './story-about-us.component';

describe('StoryAboutUsComponent', () => {
  let component: StoryAboutUsComponent;
  let fixture: ComponentFixture<StoryAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

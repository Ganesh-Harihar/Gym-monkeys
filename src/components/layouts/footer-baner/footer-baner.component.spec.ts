import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBanerComponent } from './footer-baner.component';

describe('FooterBanerComponent', () => {
  let component: FooterBanerComponent;
  let fixture: ComponentFixture<FooterBanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

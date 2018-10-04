import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpartnerComponent } from './aboutpartner.component';

describe('AboutpartnerComponent', () => {
  let component: AboutpartnerComponent;
  let fixture: ComponentFixture<AboutpartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutpartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

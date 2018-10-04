import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutconsumerComponent } from './aboutconsumer.component';

describe('AboutconsumerComponent', () => {
  let component: AboutconsumerComponent;
  let fixture: ComponentFixture<AboutconsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutconsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

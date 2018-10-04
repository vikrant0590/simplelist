import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWNavComponent } from './header-w-nav.component';

describe('HeaderWNavComponent', () => {
  let component: HeaderWNavComponent;
  let fixture: ComponentFixture<HeaderWNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

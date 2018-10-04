import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytrophiesComponent } from './mytrophies.component';

describe('MytrophiesComponent', () => {
  let component: MytrophiesComponent;
  let fixture: ComponentFixture<MytrophiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytrophiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytrophiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

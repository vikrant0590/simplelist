import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonsettingsComponent } from './amazonsettings.component';

describe('AmazonsettingsComponent', () => {
  let component: AmazonsettingsComponent;
  let fixture: ComponentFixture<AmazonsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazonsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirJordanHighZoomComponent } from './air-jordan-high-zoom.component';

describe('AirJordanHighZoomComponent', () => {
  let component: AirJordanHighZoomComponent;
  let fixture: ComponentFixture<AirJordanHighZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirJordanHighZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirJordanHighZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

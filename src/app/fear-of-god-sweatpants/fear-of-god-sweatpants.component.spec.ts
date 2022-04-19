import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FearOfGodSweatpantsComponent } from './fear-of-god-sweatpants.component';

describe('FearOfGodSweatpantsComponent', () => {
  let component: FearOfGodSweatpantsComponent;
  let fixture: ComponentFixture<FearOfGodSweatpantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FearOfGodSweatpantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FearOfGodSweatpantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

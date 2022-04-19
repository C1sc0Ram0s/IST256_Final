import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalaceAMG20LondonShirtComponent } from './palace-amg20-london-shirt.component';

describe('PalaceAMG20LondonShirtComponent', () => {
  let component: PalaceAMG20LondonShirtComponent;
  let fixture: ComponentFixture<PalaceAMG20LondonShirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalaceAMG20LondonShirtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalaceAMG20LondonShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

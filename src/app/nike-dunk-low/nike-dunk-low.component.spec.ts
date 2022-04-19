import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikeDunkLowComponent } from './nike-dunk-low.component';

describe('NikeDunkLowComponent', () => {
  let component: NikeDunkLowComponent;
  let fixture: ComponentFixture<NikeDunkLowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NikeDunkLowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NikeDunkLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdidasFoamRNNRComponent } from './adidas-foam-rnnr.component';

describe('AdidasFoamRNNRComponent', () => {
  let component: AdidasFoamRNNRComponent;
  let fixture: ComponentFixture<AdidasFoamRNNRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdidasFoamRNNRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdidasFoamRNNRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

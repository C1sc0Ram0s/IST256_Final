import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdidasYeezyKnitRNNRComponent } from './adidas-yeezy-knit-rnnr.component';

describe('AdidasYeezyKnitRNNRComponent', () => {
  let component: AdidasYeezyKnitRNNRComponent;
  let fixture: ComponentFixture<AdidasYeezyKnitRNNRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdidasYeezyKnitRNNRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdidasYeezyKnitRNNRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

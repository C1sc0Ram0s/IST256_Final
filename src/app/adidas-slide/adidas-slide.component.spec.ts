import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdidasSlideComponent } from './adidas-slide.component';

describe('AdidasSlideComponent', () => {
  let component: AdidasSlideComponent;
  let fixture: ComponentFixture<AdidasSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdidasSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdidasSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

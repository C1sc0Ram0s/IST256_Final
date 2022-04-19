import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikeSBDunkLowComponent } from './nike-sbdunk-low.component';

describe('NikeSBDunkLowComponent', () => {
  let component: NikeSBDunkLowComponent;
  let fixture: ComponentFixture<NikeSBDunkLowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NikeSBDunkLowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NikeSBDunkLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

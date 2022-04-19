import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuccixTheNorthFaceAnorakJacketComponent } from './guccix-the-north-face-anorak-jacket.component';

describe('GuccixTheNorthFaceAnorakJacketComponent', () => {
  let component: GuccixTheNorthFaceAnorakJacketComponent;
  let fixture: ComponentFixture<GuccixTheNorthFaceAnorakJacketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuccixTheNorthFaceAnorakJacketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuccixTheNorthFaceAnorakJacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

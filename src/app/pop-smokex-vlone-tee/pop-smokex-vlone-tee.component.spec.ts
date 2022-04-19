import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopSmokexVloneTeeComponent } from './pop-smokex-vlone-tee.component';

describe('PopSmokexVloneTeeComponent', () => {
  let component: PopSmokexVloneTeeComponent;
  let fixture: ComponentFixture<PopSmokexVloneTeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopSmokexVloneTeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopSmokexVloneTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

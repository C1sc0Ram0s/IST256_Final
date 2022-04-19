import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FearOfGodShortsComponent } from './fear-of-god-shorts.component';

describe('FearOfGodShortsComponent', () => {
  let component: FearOfGodShortsComponent;
  let fixture: ComponentFixture<FearOfGodShortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FearOfGodShortsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FearOfGodShortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

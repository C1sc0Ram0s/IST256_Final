import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FearOfGodPulloverHoodieComponent } from './fear-of-god-pullover-hoodie.component';

describe('FearOfGodPulloverHoodieComponent', () => {
  let component: FearOfGodPulloverHoodieComponent;
  let fixture: ComponentFixture<FearOfGodPulloverHoodieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FearOfGodPulloverHoodieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FearOfGodPulloverHoodieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

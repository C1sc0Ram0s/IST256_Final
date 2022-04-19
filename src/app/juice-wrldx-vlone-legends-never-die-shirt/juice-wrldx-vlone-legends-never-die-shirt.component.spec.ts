import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiceWrldxVloneLegendsNeverDieShirtComponent } from './juice-wrldx-vlone-legends-never-die-shirt.component';

describe('JuiceWrldxVloneLegendsNeverDieShirtComponent', () => {
  let component: JuiceWrldxVloneLegendsNeverDieShirtComponent;
  let fixture: ComponentFixture<JuiceWrldxVloneLegendsNeverDieShirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuiceWrldxVloneLegendsNeverDieShirtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiceWrldxVloneLegendsNeverDieShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBalanceComponent } from './new-balance.component';

describe('NewBalanceComponent', () => {
  let component: NewBalanceComponent;
  let fixture: ComponentFixture<NewBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

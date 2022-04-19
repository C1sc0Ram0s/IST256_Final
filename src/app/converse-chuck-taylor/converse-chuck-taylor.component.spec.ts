import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverseChuckTaylorComponent } from './converse-chuck-taylor.component';

describe('ConverseChuckTaylorComponent', () => {
  let component: ConverseChuckTaylorComponent;
  let fixture: ComponentFixture<ConverseChuckTaylorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverseChuckTaylorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverseChuckTaylorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

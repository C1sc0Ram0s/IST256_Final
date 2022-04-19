import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikeTechFleeceJoggersComponent } from './nike-tech-fleece-joggers.component';

describe('NikeTechFleeceJoggersComponent', () => {
  let component: NikeTechFleeceJoggersComponent;
  let fixture: ComponentFixture<NikeTechFleeceJoggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NikeTechFleeceJoggersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NikeTechFleeceJoggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

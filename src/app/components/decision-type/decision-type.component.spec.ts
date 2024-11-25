import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionTypeComponent } from './decision-type.component';

describe('DecisionTypeComponent', () => {
  let component: DecisionTypeComponent;
  let fixture: ComponentFixture<DecisionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecisionTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

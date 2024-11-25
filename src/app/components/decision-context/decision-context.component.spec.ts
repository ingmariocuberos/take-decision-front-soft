import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionContextComponent } from './decision-context.component';

describe('DecisionContextComponent', () => {
  let component: DecisionContextComponent;
  let fixture: ComponentFixture<DecisionContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecisionContextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDecisionData } from '../../decision/interfaces/form-decision-data.interface';
import { DecisionService } from '../../decision/decision.service';

@Component({
  selector: 'app-decision-context',
  standalone: false,

  templateUrl: './decision-context.component.html',
  styleUrl: './decision-context.component.css',
})
export class DecisionContextComponent {
  decisionOptionsForm!: FormGroup;

  @Input() formDecisionData!: FormDecisionData;
  @Input() processStep!: number;

  @Output() processStepChange = new EventEmitter<number>();
  @Output() formDecisionDataChange = new EventEmitter<FormDecisionData>();

  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private decisionService: DecisionService
  ) {
    this.decisionOptionsForm = this.formBuilder.group({
      decisionContext: ['', Validators.required],
    });
  }

  onChangeStep(step: number) {
    this.loading = true;
    if (step === 3) {
      const modifiedFormDecisionData = {
        ...this.formDecisionData,
        context: this.decisionOptionsForm.value['decisionContext'],
      };

      this.decisionService
        .sendToEvaluateDecision(modifiedFormDecisionData)
        .subscribe((response) => {
          this.formDecisionDataChange.emit({
            ...modifiedFormDecisionData,
            evaluation: response.data.evaluation,
          });
          this.loading = false;
          this.processStepChange.emit(step);
        });

    } else {
      this.processStepChange.emit(step);
    }
  }
}

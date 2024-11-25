import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDecisionData } from '../../decision/interfaces/form-decision-data.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-decision-options',
  standalone: false,

  templateUrl: './decision-options.component.html',
  styleUrl: './decision-options.component.css',
})
export class DecisionOptionsComponent {
  public decisionOptionsForm!: FormGroup;

  @Input() formDecisionData!: FormDecisionData;
  @Input() processStep!: number;

  @Output() processStepChange = new EventEmitter<number>();
  @Output() formDecisionDataChange = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) {
    this.decisionOptionsForm = this.formBuilder.group({
      optionOne: ['', Validators.required ] ,
      optionTwo: ['', Validators.required ],
      optionThree: '',
      optionFour: '',
      optionFive: '',
    });
  }

  onChangeStep(step: number){

    if(step === 2){
      if(this.decisionOptionsForm.valid){
        Object.keys(this.decisionOptionsForm.value).forEach(key => {
          this.formDecisionData.options.push(this.decisionOptionsForm.value[key]);
        });
      } else {
        Swal.fire(
          'Error',
          'Escriba por lo menos las 2 primeras opciones',
          'warning'
        )
      }
    }

    this.processStepChange.emit(step);
  }
}

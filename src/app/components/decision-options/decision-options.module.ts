import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecisionOptionsComponent } from './decision-options.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DecisionOptionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DecisionOptionsComponent
  ]
})
export class DecisionOptionsModule { }

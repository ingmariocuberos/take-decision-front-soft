import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecisionContextComponent } from './decision-context.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DecisionContextComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DecisionContextComponent
  ]
})
export class DecisionContextModule { }

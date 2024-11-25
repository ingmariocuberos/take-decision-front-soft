import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecisionComponent } from './decision.component';
import { DecisionOptionsModule } from '../components/decision-options/decision-options.module';
import { DecisionContextModule } from '../components/decision-context/decision-context.module';

@NgModule({
  declarations: [
    DecisionComponent
  ],
  imports: [
    CommonModule,
    DecisionOptionsModule,
    DecisionContextModule
  ]
})
export class DecisionModule { }

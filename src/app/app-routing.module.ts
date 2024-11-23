import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DecisionComponent } from './decision/decision.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'decision',
    component: DecisionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

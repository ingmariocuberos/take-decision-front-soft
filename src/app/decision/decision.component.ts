import * as M from 'materialize-css';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DecisionService } from './decision.service';
import { DecisionType } from './interfaces/decision-type.interface';
import { FormDecisionData } from './interfaces/form-decision-data.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decision',
  standalone: false,
  
  templateUrl: './decision.component.html',
  styleUrl: './decision.component.css'
})
export class DecisionComponent implements OnInit, AfterViewInit {

  public processStep: number = 0;

  public formDecisionData: FormDecisionData = {
    decisionType: '',
    options: [],
    context: '',
    evaluation: ''
  }

  public decisionTypes: DecisionType[] = [];

  constructor (
    private decisionService: DecisionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.decisionService.getTypeOfDecisions().subscribe(response => {
      this.decisionTypes = response.data;
    })
  }


  ngAfterViewInit() {
    const elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {
      coverTrigger: false,
      alignment: 'left'
    });
  }

  selectDecision(decisionType: DecisionType): void{
    this.formDecisionData.decisionType = decisionType.name;
  }

  onNextClick(step: number) {
    this.processStep = step;
  }

  onLogOut() {
    this.router.navigate([''])
  }

}

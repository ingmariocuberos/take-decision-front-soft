import * as M from 'materialize-css';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DecisionService } from './decision.service';
import { DecisionType } from './interfaces/decision-type.interface';

@Component({
  selector: 'app-decision',
  standalone: false,
  
  templateUrl: './decision.component.html',
  styleUrl: './decision.component.css'
})
export class DecisionComponent implements OnInit, AfterViewInit {

  public selectedDecision: DecisionType = {
    _id: '',
    name: '',
    __v: 0
  };

  public decisionTypes: DecisionType[] = [];

  constructor (
    private decisionService: DecisionService
  ) {

  }

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
    this.selectedDecision = decisionType;
    console.log('decisionType', decisionType)
  }

}

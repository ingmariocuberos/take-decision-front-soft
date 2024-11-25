import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponse } from '../interfaces/http.interface';
import { DecisionType } from './interfaces/decision-type.interface';
import { FormDecisionData } from './interfaces/form-decision-data.interface';
import { Evaluation } from './interfaces/evaluation.interface';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {

  private apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getTypeOfDecisions(): Observable<HttpResponse<DecisionType[]>> {
    return this.httpClient.get<HttpResponse<DecisionType[]>>( this.apiUrl + 'decision/all-types');
  }

  sendToEvaluateDecision(formDecisionData: FormDecisionData): Observable<HttpResponse<Evaluation>> {
    return this.httpClient.post<HttpResponse<Evaluation>>( this.apiUrl + 'evaluation/evaluate', 
      formDecisionData
    )
  }
}

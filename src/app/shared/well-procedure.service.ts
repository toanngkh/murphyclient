import { Injectable } from '@angular/core';
import { WellProcedureInput } from './well-procedure-input.model';
import { HttpClient } from "@angular/common/http";
import { DirSurveyData } from "./dir-survey-data.model";

@Injectable({
  providedIn: 'root'
})
export class WellProcedureService {
  formData = WellProcedureInput;
  dirSvyData: string;
  wellInfoList = [] as WellProcedureInput[];

  readonly rootURL = 'https://proceduregenerator20190210045919.azurewebsites.net/api';
  //readonly csvUploadURL = 'https://localhost:44354/api';

  constructor(private http: HttpClient) { }

  getWellCompletionInfo() {
    this.http.get(this.rootURL + '/wellprocedureusers').toPromise().then(res => this.wellInfoList = res as WellProcedureInput[]);
  }

  postWellCompletionInfo(formData: WellProcedureInput) {
    return this.http.post(this.rootURL + '/wellprocedureusers', formData);
  }

  postDirSurveyData(dirSvyData: string) {
    return this.http.post(this.rootURL + '/dirsvydatas', dirSvyData);
  }
}

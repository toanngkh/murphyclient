import { Injectable } from '@angular/core';
import { WellProcedureInput } from './well-procedure-input.model';
import { HttpClient } from "@angular/common/http";
import { DirSurveyData } from "./dir-survey-data.model";

@Injectable({
  providedIn: 'root'
})
export class WellProcedureService {
  formData = WellProcedureInput;
  //dirSvyData: DirSurveyData[] = [];
  dirSvyData: string;

  readonly rootURL = 'https://localhost:44354/api';
  readonly csvUploadURL = 'https://localhost:44354/api';

  constructor(private http: HttpClient) { }

  postWellCompletionInfo(formData: WellProcedureInput) {
    return this.http.post(this.rootURL + '/wellprocedureusers', formData);
  }

  postDirSurveyData(dirSvyData: string) {
    return this.http.post(this.csvUploadURL + '/dirsvydatas', dirSvyData);
  }
}

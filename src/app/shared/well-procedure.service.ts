import { Injectable } from '@angular/core';
import { WellProcedureInput } from './well-procedure.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WellProcedureService {
  formData = WellProcedureInput;
  readonly rootURL = 'https://localhost:44354/api';

  constructor(private http: HttpClient) { }

  postWellCompletionInfo(formData: WellProcedureInput) {
    return this.http.post(this.rootURL + '/wellprocedureusers', formData);
  }
}

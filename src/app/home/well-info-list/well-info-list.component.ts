import { Component, OnInit } from '@angular/core';
import { WellProcedureService } from 'src/app/shared/well-procedure.service';

@Component({
  selector: 'app-well-info-list',
  templateUrl: './well-info-list.component.html',
  styleUrls: ['./well-info-list.component.css']
})
export class WellInfoListComponent implements OnInit {
  //service = WellProcedureService;
  readonly link = 'http://ec2-52-14-226-87.us-east-2.compute.amazonaws.com/HTML_files/run_script.php?id=';

  constructor(public service: WellProcedureService) { }

  ngOnInit() {
    this.service.getWellCompletionInfo();
  }

}

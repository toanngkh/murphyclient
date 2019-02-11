import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WellProcedureService } from 'src/app/shared/well-procedure.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { parse } from "papaparse";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  @ViewChild('labelImport')
  labelImport: ElementRef;

  formImport: FormGroup;
  fileToUpload: File = null;

  public result: any;

  constructor(private service: WellProcedureService) {
    this.formImport = new FormGroup({
      importFile: new FormControl('')
    });
  }

  ngOnInit() {
    this.service.getWellCompletionInfo();
  }

  onSubmit(form: NgForm) {
    this.service.postWellCompletionInfo(form.value).subscribe(
      res => {
        this.result = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = files.item(0).name;
    this.fileToUpload = files.item(0);
  }

  uploadFile() {
    const csvData = parse(this.fileToUpload, {
      header: true,
      skipEmptyLines: true,
      complete: (rs) => {
        this.postDataToApi(rs.data);
      }
    });
  }

  postDataToApi(dataset) {
    this.service.postDirSurveyData(dataset).subscribe(
      res => {
        this.result = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  // callScript() {

  // }

  // resetForm(form?: NgForm) {
  //   if (form != null) {
  //     form.form.reset();
  //     this.service.formData = {
  //       Id: '';
  //       WellName: '';
  //       County: '';
  //       FieldName: '';
  //       CompletionYear: 0;
  //       H2sPermit: 0;
  //       FracVendor: '';
  //       Npd: 0;
  //       SleeveType: 0;
  //       RaTracers: 0;
  //       ChemicalTracers: 0;
  //       Microseismic: 0;
  //       PlugVendor: 0;
  //       Rig: 0;
  //       DesignedSandType: 0;
  //       DesignedFluidType: 0;
  //       Clusters: 0;
  //       CompletionWbsNo: 0;
  //       CompletionWbsAmount: 0;
  //       StagingPitName: 0;
  //       MaxSurfaceTreatingPress: 0;
  //       ClusterSpacing: 0;
  //       SpudDate: '';
  //       MrolDate: '';
  //       CasingSize: 0;
  //       PadWell: 0;
  //       ApiNo: 0;
  //       DrillingPermit: 0;
  //       Kop: 0;
  //       KbGl: 0;
  //       KbCf: 0;
  //       Gl: 0;
  //       Md: 0;
  //       Bht: 0;
  //       TopOfTargetZoneMd: 0;
  //       MarkerJointAtKoPoint: 0;
  //       MarkerJointAt30Deg: 0;
  //       BSectionTestPressure: 0;
  //       FracStackTestPressure: 0;
  //       SurfaceIronTestPressure: 0;
  //       SleeveOpeningPressure: 0;
  //       MaxSleevePressure: 0;
  //       SleeveTestPressure: 0;
  //       CompletionsEngineer: 0;
  //       PlugBumped: 0;
  //       PlugBumpedPsi: 0;
  //       PsiOver: 0;
  //       BblsDispatched: 0;
  //       BblsBledBack: 0;
  //       BblCementRecovered: 0;
  //       BblSpacerRecoverd: 0;
  //       FloatsHolding: 0;
  //       PlannedHeelAngle: 0;
  //       BottomOfSleeve: 0;
  //       EotAngle: 0;
  //     }
  //   }
  // }

}

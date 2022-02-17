import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-offre-finale',
  templateUrl: './offre-finale.component.html',
  styleUrls: ['./offre-finale.component.css']
})
export class OffreFinaleComponent implements OnInit {
  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  nameCompany: any;
  value = '';
  propositionTotale: any;
  informationGlobOff: any;
  reveientAndFG: any;
  revientTotale: any;
  margeBrute: any;
  margeFinale: any;
  margeNet: any;
  getAllInformation: any;
  endOfStep1Operation: any;
  getAllInformationForStep1: any;
  getAllInformationForStep2Worker: any;
  getAllInformationForStep2:any;
  getAllInformationForStep3Worker: any;
  getAllInformationForStep3: any;
  getAllInformationForFinalOffre: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  addWorkerInOffre() {
    this.visible1 = !this.visible1
  }

  searchOnOffreBy() {
    this.visible2 = !this.visible2

  }
  onEnter(value: string) {
    var key, val;
    this.value = value;
    //console.log(this.value);
    var idOffreSend = value;
    var phoneNumberOfUser = localStorage.getItem('phoneNumberOfUser')
    const queryObj = {
      idOffreSend,
      phoneNumberOfUser
    }

    this.http.post('http://20.124.200.128/company/getAllInformationOfAnWorker', queryObj)
      .subscribe(res => {
        for ([key, val] of Object.entries(res)) {
          this.visible1 = !this.visible1;
          if(key == "resutFunction1"){
            //console.log(val)
            // for (var i = 0; i < val.length; i++) {
            //   if(val[i]=="Step1"){
            //     this.endOfStep1Operation = i
            //     console.log(this.endOfStep1Operation)
            //   }
            // }
            this.getAllInformation = val;
          }
          if(key == "resutFunction2"){
            //console.log(val)
            this.getAllInformationForStep1 = val
          }
          if(key == "resutFunction3"){
            //console.log(val)
            this.getAllInformationForStep2Worker = val
          }
          if(key == "resutFunction4"){
            //console.log(val)
            this.getAllInformationForStep2 = val
          }
          if(key == "resutFunction5"){
            //console.log(val)
            this.getAllInformationForStep3Worker = val
          }
          if(key == "resutFunction6"){
            //console.log(val)
            this.getAllInformationForStep3 = val
          }
          if(key == "resutFunction8"){
            //console.log(val)
            this.getAllInformationForFinalOffre = val
          }

        }
      })
  }
  printWindow(){
    window.print()
  }
}
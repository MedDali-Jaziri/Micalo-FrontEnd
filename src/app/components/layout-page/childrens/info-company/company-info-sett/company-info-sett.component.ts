import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-info-sett',
  templateUrl: './company-info-sett.component.html',
  styleUrls: ['./company-info-sett.component.css']
})
export class CompanyInfoSettComponent implements OnInit {
  dataPass: any;
  nameUser: any;
  nameClientCompany: any;
  imageProfileForUser: any;
  firstNameProfile: any;
  lastNameProfile: any;
  emailProfile: any="--";
  taxRegNum: any;
  currency: any ="TND";
  Address: any="--"
  telPhone: any="--";
  fixePhone: any="--"
  logoCompany:any ="../../../assets/img/CompanyLogo.png";

  constructor(private http: HttpClient,private router: Router) {
    var key1,val1;
    this.dataPass = this.router.getCurrentNavigation()?.extras.state;
    //console.log("Page Dashbord")
    //console.log(this.dataPass)
    var phoneUserNumber = localStorage.getItem("phoneNumberOfUser");
    
    const queryObj={
      phoneUserNumber
    }
    var nameOfCompany =""
    this.http.post('http://20.124.200.128/company/getInformationFromCompanyDB', queryObj)
    .subscribe(res => {
      for ([key1, val1] of Object.entries(res)) {
        if (key1 == "resutFunction") {
          var informationData = val1[0];
          //console.log(informationData)
          for(let i=0; i<informationData.length;i++){
            //console.log(informationData[1]);
            this.nameClientCompany = informationData[1];
            this.emailProfile = informationData[11];
            this.telPhone = informationData[8];
            this.fixePhone = informationData[9];
            this.taxRegNum = informationData[10];
            this.currency = informationData[5];
            this.Address = informationData[12];
            this.logoCompany = informationData[7];
            //console.log(nameOfCompany)
          }
        }
      }
    })
  }

  ngOnInit(): void {
  }

  EditInformation(){
    this.router.navigateByUrl('/LayoutPage/EditInfoCompany', { state: {} });
  }
}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashbord-page',
  templateUrl: './dashbord-page.component.html',
  styleUrls: ['./dashbord-page.component.css']
})
export class DashbordPageComponent implements OnInit {
  dataPass: any;
  nameUser: any;
  nameClientCompany: any;
  imageProfileForUser: any;
  firstNameProfile: any;
  lastNameProfile: any;
  emailProfile: any;
  logoCompany: any = "../../../assets/img/CompanyLogo.png";

  constructor(private http: HttpClient, private router: Router) {
    var key = "phoneUserNumber";
    let key1,val1;
    var phoneUserNumber;
    this.dataPass = this.router.getCurrentNavigation()?.extras.state;
    phoneUserNumber = localStorage.getItem('phoneNumberOfUser');
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
            nameOfCompany = informationData[1]; 
            this.nameClientCompany = nameOfCompany;
            this.logoCompany = informationData[7]
            //console.log(nameOfCompany)
          }
        }
      }
    })
  }

  ngOnInit(): void {
  }
  
}

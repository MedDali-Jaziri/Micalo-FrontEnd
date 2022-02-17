import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit {
  dataPass: any;
  nameUser: any;
  nameClientCompany: any;
  imageProfileForUser: any;
  firstNameProfile: any;
  lastNameProfile: any;
  emailProfile: any;
  phoneUserNumber: any;
  dateNow: any;
  constructor(private datePipe: DatePipe, private router: Router) {
    let valueDataInformation;
    let key = "dataInformation"
    this.dataPass = this.router.getCurrentNavigation()?.extras.state;
    // console.log("Page Dashbord")
    // console.log(this.dataPass)
    var date = new Date();
    this.dateNow = this.datePipe.transform(date,"yyyy-MM-dd")
    //console.log(this.dateNow)

    for (key in this.dataPass) {
      valueDataInformation =  this.dataPass["dataInformation"];
    }
    var valueDataFinale = valueDataInformation[0]
    // console.log(valueDataFinale)
    //console.log(valueDataInformation)
  
    for (let i = 0; i < valueDataFinale.length; i++) {
      this.firstNameProfile = valueDataFinale[0];
      this.lastNameProfile = valueDataFinale[1];
      this.emailProfile = valueDataFinale[2];
      this.imageProfileForUser = valueDataFinale[5];
      this.phoneUserNumber = valueDataFinale[3];
    }

    localStorage.setItem('phoneNumberOfUser',this.phoneUserNumber);
    // console.log(this.firstNameProfile);
    // console.log(this.lastNameProfile);
    // console.log(this.emailProfile);
    // console.log(this.imageProfileForUser);
    this.router.navigateByUrl('/LayoutPage/PageDashbord', {});

  }

  ngOnInit(): void {
  }

  settingsInfoCompany() {
  }
}

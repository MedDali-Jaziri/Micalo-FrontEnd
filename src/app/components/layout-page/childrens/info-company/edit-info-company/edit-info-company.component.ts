import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-info-company',
  templateUrl: './edit-info-company.component.html',
  styleUrls: ['./edit-info-company.component.css']
})
export class EditInfoCompanyComponent implements OnInit {
  dataPass: any;
  nameUser: any="";
  nameClientCompany: any="";
  imageProfileForUser: any="";
  firstNameProfile: any="";
  lastNameProfile: any="";
  addressCompany: any="";
  taxRegNum: any="";
  currency: any="";
  Address: any="";
  nameCompany: any="";
  telePhone: any="";
  cellNumber: any="";
  webSite: any="";
  emailUserCompany: any="";
  city: any="";
  zipCode: any="";
  countryUser: any="";
  logoCompany: any = "../../../assets/img/CompanyLogo.png";

  constructor(private http: HttpClient, private router: Router) {


    var val1, key1;
    var phoneUserNumber = localStorage.getItem("phoneNumberOfUser");
    const queryObj = {
      phoneUserNumber
    }
    this.http.post('http://20.124.200.128/company/getInformationFromCompanyDB', queryObj)
      .subscribe(res => {
        for ([key1, val1] of Object.entries(res)) {
          if (key1 == "resutFunction") {
            var informationData = val1[0];
            //console.log(informationData)
            for (let i = 0; i < informationData.length; i++) {
              //console.log(informationData[1]);
              this.nameCompany = informationData[1];
              this.currency = informationData[5];
              this.countryUser = informationData[2];
              this.telePhone = informationData[8];
              this.cellNumber = informationData[9];
              this.webSite = informationData[16];
              this.lastNameProfile = informationData[18];
              this.firstNameProfile = informationData[17];
              this.emailUserCompany = informationData[11]
              this.addressCompany = informationData[12];
              this.taxRegNum = informationData[10];
              this.city = informationData[13];
              this.zipCode = informationData[14];
              this.logoCompany = informationData[7]
              //console.log(this.city)
            }
          }
        }
      })
  }



  ngOnInit(): void {
  }

  EditInformation() {
    this.router.navigateByUrl('/EditInfoCompany', { state: {} });
  }
  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.logoCompany = reader.result

      };

    }
  }

  saveMeButton() {
    let key, val;
    var phoneUserNumber = localStorage.getItem("phoneNumberOfUser");
    var nameCompanySend = this.nameCompany;
    var telePhoneSend = this.telePhone;
    var cellNumberSend = this.cellNumber;
    var webSiteSend = this.webSite;
    var emailUserCompanySend = this.emailUserCompany;
    var firstNameProfileSend = this.firstNameProfile;
    var lastNameProfileSend = this.lastNameProfile;
    var addressCompanySend = this.addressCompany;
    var citySend = this.city;
    var zipCodeSend = this.zipCode;
    var logoCompanySend = this.logoCompany;
    var taxRegNumSend = this.taxRegNum;
    /*if (!this.form.valid) {
      console.log("ddddddddddddddddddddd")
      console.log(nameCompanySend);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "It's a wrong code check it!",
      })
    }*/


    const queryObj = {
      phoneUserNumber,
      nameCompanySend,
      telePhoneSend,
      cellNumberSend,
      webSiteSend,
      firstNameProfileSend,
      lastNameProfileSend,
      emailUserCompanySend,
      citySend,
      zipCodeSend,
      logoCompanySend,
      taxRegNumSend,
      addressCompanySend
    }
    this.http.post('http://20.124.200.128/company/EditInformationOfCompany', queryObj)
      .subscribe(res => {
        for ([key, val] of Object.entries(res)) {
          if (key == "resutFunction") {
            if (val == 0) {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There is not an account has this email try again please',
              })
            }
            else {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Welcome on MiCalo!!',
                showConfirmButton: false,
                timer: 1500
              })
              this.router.navigateByUrl('/LayoutPage/CompanyInfoSett', {});
            }
          }
        }
      })
  }
}
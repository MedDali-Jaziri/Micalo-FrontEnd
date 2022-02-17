import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.css']
})
export class InfoClientComponent implements OnInit {
  imgChangeEvt: any = '';
  cropImgPreview: any = '';
  userProfileImage: any = "";
  FirstName: any = "";
  LastName: any = "";
  passwordProfile: any = "";
  emailProfile: any = "";

  constructor(private http: HttpClient, private router: Router) {
    var key, val;
    var phoneUserNumber = localStorage.getItem("phoneNumberOfUser");
    const queryObj = {
      phoneUserNumber
    }
    this.http.post('http://20.124.200.128/client/ClientCompany', queryObj)
      .subscribe(res => {
        for ([key, val] of Object.entries(res)) {
          if (key == "resutFunction") {
            var informationData = val[0];
            //console.log(informationData)
            for (let i = 0; i < informationData.length; i++) {
              //console.log(val)
              this.userProfileImage = informationData[5]
              this.FirstName = informationData[0]
              this.LastName = informationData[1]
              this.emailProfile = informationData[2]
              this.passwordProfile = informationData[4]
            }
          }
        }
      })

  }

  ngOnInit(): void {
  }
  onFileChange2(event: any): void {
    this.imgChangeEvt = event;
  }
  imgFailed() {
    // error msg
  }
  cropImg(e: ImageCroppedEvent) {
    this.cropImgPreview = e.base64;
    this.userProfileImage = e.base64
    //console.log(e.base64);
  }
  initCropper() {
    // init cropper
  }
  imgLoad() {
    // display cropper tool
  }
  onFileChange(event: any) {
    this.imgChangeEvt = event;
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.userProfileImage = reader.result

      };

    }
  }
  updateInformationClient() {
    var key, val
    var phoneUserNumber = localStorage.getItem("phoneNumberOfUser");
    var userProfileImageToDB = this.userProfileImage
    var FirstNameToDB = this.FirstName
    var LastNameToDB = this.LastName
    var emailProfileToDB = this.emailProfile
    var passwordProfileToDB = this.passwordProfile
    const queryObj = {
      phoneUserNumber,
      userProfileImageToDB,
      FirstNameToDB,
      LastNameToDB,
      emailProfileToDB,
      passwordProfileToDB
    }
    this.http.post('http://20.124.200.128/client/updateInfoClientCompany', queryObj)
      .subscribe(res => {
        for ([key, val] of Object.entries(res)) {
          if (key == "resutFunction") {
            // console.log("cccccccccccccccccccccccc",val)
            if (val == 1) {
              Swal.fire(
                'Good job!',
                'You modified your information',
                'success'
              )
              this.router.navigateByUrl('/LayoutPage/PageDashbord', {});
            }
            
          }
        }
      })
  }
}

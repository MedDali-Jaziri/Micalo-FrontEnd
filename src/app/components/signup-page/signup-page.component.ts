import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import Swal from 'sweetalert2';
import { keyframes } from '@angular/animations';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  photoProfileUser: any="0";
  closeResult = '';
  validationGetFree: any;
  nextPage = 0;
  previousNumber = 0;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    if (window.localStorage) {
      if (!localStorage.getItem('firstLoad')) {
        localStorage['firstLoad'] = true;
        window.location.reload();
      }
      else
        localStorage.removeItem('firstLoad');
    }
    this.form = fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      emailUser: new FormControl(null, [Validators.required, Validators.email]),
      passwordUser: ['', [Validators.required]],
      phoneUser: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      nameCompany: new FormControl('', Validators.required),
      companAct: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      numberWorker: new FormControl('', Validators.required),
      currency: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    
  }

  clicksub() {
    let key, val;
    var dataSend = this.form.value;
    var imageUser = this.photoProfileUser;
    // console.log(dataSend);
    // console.log(imageUser);

    const queryObj = {
      dataSend,
      imageUser
    }
    if(this.nextPage == 0){
      this.http.post('http://20.124.200.128/client/signupClient', queryObj)
      .subscribe(res => {
        for ([key, val] of Object.entries(res)) {
          if(key == "resultSignUp"){
            //this.imageValue = val;
            // console.log(val);
            if(val == "0"){
              this.router.navigateByUrl('/PageSignUp', { state: {} });
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must choose another phone number \n',
              })
              window.location.reload();
            }
          }
        }
        this.nextPage = 1;
        this.previousNumber = 1;

      })
    }
    else if(this.nextPage == 1){
      // console.log(dataSend)
      this.http.post('http://20.124.200.128/company/signupCompany', queryObj)
      .subscribe(res => {
        for ([key, val] of Object.entries(res)) { 
          if(key == "resultSignUpCompany"){
            //this.imageValue = val;
            // console.log(val);
            if(val == "0"){
              this.router.navigateByUrl('/PageSignUp', { state: {} });
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must choose another name company \n',
              })
              window.location.reload();
            }
          }
        }
      })
      this.nextPage = 0;
      this.previousNumber = 2
    }
  }

  Previous(){
    if(this.previousNumber == 1){
      this.nextPage = 0;
    }
    else{
      this.nextPage = 1;
    }
    
  }
  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.form.patchValue({
          fileSource: reader.result

        });
        this.photoProfileUser = reader.result
      };

    }
  }
  get exformFunction() { return this.form.controls; }


  getFreeAccount() {
    Swal.fire('Thank you...', 'You have only 2 day demo!', 'success')
    this.validationGetFree = 1;
  }

  signUp() {
    if (this.validationGetFree == 1) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your account has been saved!!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('/PageHome', { state: {} });
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must choose one of this option',
      })
    }

  }
}

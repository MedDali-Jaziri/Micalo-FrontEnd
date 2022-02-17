import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { 
    localStorage.setItem('phoneNumberOfUser', '0');
    localStorage.setItem("firstNameProfile", '');
    localStorage.setItem("lastNameProfile", '');
    localStorage.setItem("emailProfile", '');
    localStorage.setItem("imageProfileForUser",'');
    localStorage.setItem("phoneUserNumber", '');
  }

  ngOnInit(): void {
  }
}

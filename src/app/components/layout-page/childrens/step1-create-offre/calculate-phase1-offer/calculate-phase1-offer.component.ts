import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculate-phase1-offer',
  templateUrl: './calculate-phase1-offer.component.html',
  styleUrls: ['./calculate-phase1-offer.component.css']
})
export class CalculatePhase1OfferComponent implements OnInit {
  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  nameCompany: any;
  value = '';
  informationGlobOff : any;
  constructor(private http:HttpClient) { 

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
    const queryObj={
      idOffreSend,
      phoneNumberOfUser
    }

    this.http.post('http://20.124.200.128/company/calculPhase1Offre', queryObj)
      .subscribe(res => {
        for ([key, val] of Object.entries(res)) {
          if (key == "resutFunction") {
            //console.log(val);
            if(val.length==0){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "You don't have this offre try again !",
              })
            }
            else{
              this.informationGlobOff = val;
              this.visible1 = !this.visible1;
              this.visible2 = !this.visible2
            }
          }
        }
      })

  }

}


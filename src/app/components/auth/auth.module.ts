import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from '../home-page/home-page.component';
import { SignupPageComponent } from '../signup-page/signup-page.component';
import { SigninPageComponent } from '../signin-page/signin-page.component';
import { WebcamModule } from 'ngx-webcam';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Ng5SliderModule } from 'ng5-slider';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutPageComponent } from '../layout-page/layout-page.component';
import { DashbordPageComponent } from '../layout-page/childrens/dashbord-page/dashbord-page.component';
import { AddWorkerEspaceComponent } from '../layout-page/childrens/step1-create-offre/add-worker-espace/add-worker-espace.component';
import { AddWorkerIntoOffreComponent } from '../layout-page/childrens/step1-create-offre/add-worker-into-offre/add-worker-into-offre.component';
import { CalculatePhase1OfferComponent } from '../layout-page/childrens/step1-create-offre/calculate-phase1-offer/calculate-phase1-offer.component';
import { EditInfoCompanyComponent } from '../layout-page/childrens/info-company/edit-info-company/edit-info-company.component';
import { CompanyInfoSettComponent } from '../layout-page/childrens/info-company/company-info-sett/company-info-sett.component';
import { ApprovalOfExecutionFilesComponent } from '../layout-page/childrens/step2-create-offre/approval-of-execution-files/approval-of-execution-files.component';
import { CalculatePhase2OffreComponent } from '../layout-page/childrens/step2-create-offre/calculate-phase2-offre/calculate-phase2-offre.component';
import { MonitoringOfWorksComponent } from '../layout-page/childrens/step3-create-offre/monitoring-of-works/monitoring-of-works.component';
import { CalculatePhase3OffreComponent } from '../layout-page/childrens/step3-create-offre/calculate-phase3-offre/calculate-phase3-offre.component';
import { OffreFinaleComponent } from '../layout-page/childrens/offre-finale/offre-finale.component';
import { InfoClientComponent } from '../layout-page/childrens/info-client/info-client.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxPrintModule } from 'ngx-print';
import {DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    HomePageComponent,
    SignupPageComponent,
    SigninPageComponent,
    DashbordPageComponent,
    LayoutPageComponent,
    CompanyInfoSettComponent,
    EditInfoCompanyComponent,
    AddWorkerEspaceComponent,
    AddWorkerIntoOffreComponent,
    CalculatePhase1OfferComponent,
    ApprovalOfExecutionFilesComponent,
    CalculatePhase2OffreComponent,
    MonitoringOfWorksComponent,
    CalculatePhase3OffreComponent,
    OffreFinaleComponent,
    InfoClientComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    WebcamModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    Ng5SliderModule,
    ImageCropperModule,
    NgxPrintModule
    
  ],
  exports: [
    HomePageComponent,
    SignupPageComponent,
    SigninPageComponent,
    DashbordPageComponent,
    LayoutPageComponent,
    CompanyInfoSettComponent,
    EditInfoCompanyComponent,
    AddWorkerEspaceComponent,
    AddWorkerIntoOffreComponent,
    CalculatePhase1OfferComponent,
    ApprovalOfExecutionFilesComponent,
    CalculatePhase2OffreComponent,
    MonitoringOfWorksComponent,
    CalculatePhase3OffreComponent,
    OffreFinaleComponent,
    InfoClientComponent
  ],
  providers: [DatePipe]
})

export class AuthModule { }

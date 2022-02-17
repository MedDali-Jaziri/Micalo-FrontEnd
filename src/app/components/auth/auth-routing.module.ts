import { SignupPageComponent } from './../signup-page/signup-page.component';
import { HomePageComponent } from './../home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninPageComponent } from '../signin-page/signin-page.component';
import { LayoutPageComponent } from '../layout-page/layout-page.component';
import { DashbordPageComponent } from '../layout-page/childrens/dashbord-page/dashbord-page.component';
import { CompanyInfoSettComponent } from '../layout-page/childrens/info-company/company-info-sett/company-info-sett.component';
import { AddWorkerEspaceComponent } from '../layout-page/childrens/step1-create-offre/add-worker-espace/add-worker-espace.component';
import { AddWorkerIntoOffreComponent } from '../layout-page/childrens/step1-create-offre/add-worker-into-offre/add-worker-into-offre.component';
import { CalculatePhase1OfferComponent } from '../layout-page/childrens/step1-create-offre/calculate-phase1-offer/calculate-phase1-offer.component';
import { EditInfoCompanyComponent } from '../layout-page/childrens/info-company/edit-info-company/edit-info-company.component';
import { ApprovalOfExecutionFilesComponent } from '../layout-page/childrens/step2-create-offre/approval-of-execution-files/approval-of-execution-files.component';
import { CalculatePhase2OffreComponent } from '../layout-page/childrens/step2-create-offre/calculate-phase2-offre/calculate-phase2-offre.component';
import { MonitoringOfWorksComponent } from '../layout-page/childrens/step3-create-offre/monitoring-of-works/monitoring-of-works.component';
import { CalculatePhase3OffreComponent } from '../layout-page/childrens/step3-create-offre/calculate-phase3-offre/calculate-phase3-offre.component';
import { OffreFinaleComponent } from '../layout-page/childrens/offre-finale/offre-finale.component';
import { InfoClientComponent } from '../layout-page/childrens/info-client/info-client.component';
// Datepicker module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const routes: Routes = [
  {component: HomePageComponent, path: 'PageHome'},
  {component: SignupPageComponent, path: 'PageSignUp'},
  {component: SigninPageComponent, path:'PageSignIn'},
  {component: LayoutPageComponent, path:'LayoutPage', children:[
    {component: DashbordPageComponent, path:'PageDashbord'},
    {component: CompanyInfoSettComponent, path:'CompanyInfoSett'},
    {component: EditInfoCompanyComponent, path:'EditInfoCompany'},
    {component: AddWorkerEspaceComponent, path:'AddWorkerEspace'},
    {component: AddWorkerIntoOffreComponent, path:'AddWorkerIntoOffre'},
    {component: CalculatePhase1OfferComponent, path:'CalculatePhase1Offer'},
    {component: ApprovalOfExecutionFilesComponent, path:'ApprovalOfExecutionFiles'},
    {component:CalculatePhase2OffreComponent, path:'CalculatePhase2Offre'},
    {component:MonitoringOfWorksComponent, path:'MonitoringOfWorks'},
    {component:CalculatePhase3OffreComponent, path:'CalculatePhase3Offre'},
    {component:OffreFinaleComponent, path:'OffreFinale'},
    {component:InfoClientComponent, path:'InfoClient'}
  ]},
  
  /*{component:PageContractsComponent, path:'demandes',},
  {component:NewContractComponent, path:"NouvelleDemande"},
  {component:PageCheckDifferenceComponent, path:"checkDifference"},
  {component:PageClientComponent, path:"pageClient"},
  {component:PageLayoutComponent, path:"pageLayout"}*/

];

@NgModule({
  declarations:[
    ],
  imports: [
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

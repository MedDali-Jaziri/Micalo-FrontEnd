import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

const routes: Routes = [
  {component: HomePageComponent , path: "HomePage"},
  {path: "", redirectTo: "/HomePage", pathMatch: "full"},
  {component: SignupPageComponent, path: 'PageSignUp'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

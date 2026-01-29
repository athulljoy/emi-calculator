import { Routes } from '@angular/router';
import { Register } from './pages/register/register';
import { Calculator } from './pages/calculator/calculator';
import { Login } from './pages/login/login';
import { LandingPage } from './pages/landing-page/landing-page';

export const routes: Routes = [
  {
    path:'', component: LandingPage
  },
  {
    path:'register', component: Register
  },
  {
    path:'login', component: Login
  },
  {
    path:'calculator', component: Calculator
  },
];

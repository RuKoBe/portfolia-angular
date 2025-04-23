import { Routes } from '@angular/router';
import {LandingPageComponent} from './components/pages/landing-page/landing-page.component';
import { HomePageComponent } from './components/pages/blog/home-page/home-page.component';

export const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "blog", component: HomePageComponent}
];

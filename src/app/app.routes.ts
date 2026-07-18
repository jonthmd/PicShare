import { Routes } from '@angular/router';
import { SharedPicList } from './shared-pic-list/shared-pic-list';
import { LandingPage } from './landing-page/landing-page';
import { SingleSharedPic } from './single-shared-pic/single-shared-pic';

export const routes: Routes = [
  { path: 'pics/:id', component: SingleSharedPic },
  { path: 'pics', component: SharedPicList },
  { path: '', component: LandingPage },
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerDashboardComponent } from './components/buyer-dashboard/buyer-dashboard.component';
import { AboutUsComponent } from './components/common/pages/about-us/about-us.component';
import { BuyerLoginComponent } from './components/common/pages/buyer-login/buyer-login.component';
import { BuyerRegisterComponent } from './components/common/pages/buyer-register/buyer-register.component';
import { ComingSoonComponent } from './components/common/pages/coming-soon/coming-soon.component';
import { ContactUsComponent } from './components/common/pages/contact-us/contact-us.component';
import { SellerLoginComponent } from './components/common/pages/seller-login/seller-login.component';
import { SellerRegisterComponent } from './components/common/pages/seller-register/seller-register.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'home',
    component: MainPageComponent,
  },
  {
    path:'about-us',
    component: AboutUsComponent,
  },
  {
    path:'contact-us',
    component: ContactUsComponent,
  },
  {
    path:'comming-soon',
    component: ComingSoonComponent,
  },
  {
    path:'seller-login',
    component: SellerLoginComponent,
  },
  {
    path:'seller-register',
    component: SellerRegisterComponent,
  },
  {
    path:'buyer-login',
    component: BuyerLoginComponent,
  },
  {
    path:'buyer-register',
    component: BuyerRegisterComponent,
  },
  {
    path:'buyer-dashboard',
    component: BuyerDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

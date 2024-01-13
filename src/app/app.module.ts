import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/common/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './components/common/menu/menu.component';
// import { SliderComponent } from './components/common/menu/pages/home/slider/slider.component';
import { SliderComponent } from './components/common/slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AboutUsComponent } from './components/common/pages/about-us/about-us.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SideMenuComponent } from './components/common/side-menu/side-menu.component';
import { SideNavigationComponent } from './components/common/side-navigation/side-navigation.component';
import { ComingSoonComponent } from './components/common/pages/coming-soon/coming-soon.component';
import { SellerLoginComponent } from './components/common/pages/seller-login/seller-login.component';
import { SellerRegisterComponent } from './components/common/pages/seller-register/seller-register.component';
import { BuyerLoginComponent } from './components/common/pages/buyer-login/buyer-login.component';
import { BuyerRegisterComponent } from './components/common/pages/buyer-register/buyer-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BuyerDashboardComponent } from './components/buyer-dashboard/buyer-dashboard.component';
import { ContactUsComponent } from './components/common/pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SliderComponent,
    AboutUsComponent,
    FooterComponent,
    MainPageComponent,
    SideMenuComponent,
    SideNavigationComponent,
    ComingSoonComponent,
    SellerLoginComponent,
    SellerRegisterComponent,
    BuyerLoginComponent,
    BuyerRegisterComponent,
    BuyerDashboardComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

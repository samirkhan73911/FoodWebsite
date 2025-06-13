import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { OurMenuComponent } from './our-menu/our-menu.component';
import { OurBlogsComponent } from './our-blogs/our-blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ReservationComponent } from './reservation/reservation.component';
import { Page404Component } from './page404/page404.component';
import { ThankYoupageComponent } from './thank-youpage/thank-youpage.component';


export const routes: Routes = [
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"ourmenu",
        component:OurMenuComponent
    },
    {
        path:"ourblogs",
        component:OurBlogsComponent
    },
    {
        path:"contactus",
        component:ContactUsComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"signup",
        component:SignupComponent
    },
    {
        path:"ForgetPassword",
        component:ForgetPasswordComponent
    },
    {
        path:"reservation",
        component:ReservationComponent
    },
    {
        path:"page404",
        component:Page404Component
    },
    {
        path:"ThankYoupage",
        component:ThankYoupageComponent
    },
   
];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OurMenuComponent } from './pages/our-menu/our-menu.component';
import { OurBlogsComponent } from './pages/our-blogs/our-blogs.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { Page404Component } from './pages/page404/page404.component';
import { ThankYoupageComponent } from './pages/thank-youpage/thank-youpage.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';



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
        path:"cart",
        component:CartComponent
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
    {
        path:"productdetailspage",
        component:ProductdetailsComponent
    },
   
];

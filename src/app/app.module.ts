import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from "./user/user.component";
import { HttpModule } from "@angular/http";
import { HoverDirective } from "./hover.directive";
import { FormsModule } from "@angular/forms";
import { SearchPipe } from "./search.pipe";
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { RouterModule } from "@angular/router";
import { RestComponent } from './rest/rest.component';
import {UserService} from "./user.service";
import {CarsService} from "./cars.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth.interceptor";
import {TokenService} from "./token.service";
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarComponent } from './car/car.component';


const routes  = [
  {path:"car",component:CarComponent},
  {path:"",component: HomePageComponent},
  {path:"db",component: RestComponent},
  {path:"setup",component: SetupPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    SetupPageComponent,
    RestComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule
  ],
  providers: [
    UserService,
    CarsService,
    TokenService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

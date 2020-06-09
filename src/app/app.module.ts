import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,  Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


//firebase ,auth ,database and routing
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatherComponent } from './weather/weather.component';
import { MotorAndFanComponent } from './motor-and-fan/motor-and-fan.component';
import { SoundAndLiveComponent } from './sound-and-live/sound-and-live.component';
import { InfoComponent } from './info/info.component';

const appRouter: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo:'home', pathMatch:'full' }, //if path is null redirect to home component
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent },  //if any other path go to notFound component
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatusComponent,
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    WeatherComponent,
    MotorAndFanComponent,
    SoundAndLiveComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRouter) ,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

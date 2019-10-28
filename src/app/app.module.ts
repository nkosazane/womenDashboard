import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './component/login/login.component';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { TablesComponent } from './component/tables/tables.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { DonationsComponent } from './component/donations/donations.component';
import { ChatsComponent } from './component/chats/chats.component';

const firebaseConfig = {
  apiKey: "AIzaSyC1TA8JQDneK2YCLgDNUPpGQgFwvPByeaw",
  authDomain: "womanhealth-a607a.firebaseapp.com",
  databaseURL: "https://womanhealth-a607a.firebaseio.com",
  projectId: "womanhealth-a607a",
  storageBucket: "womanhealth-a607a.appspot.com",
  messagingSenderId: "726806845953",
  appId: "1:726806845953:web:39c6eaca3f5eee076f7e00",
  measurementId: "G-J3F1H2MRRX"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TablesComponent,
    DashboardComponent,
    UserProfileComponent,
    DonationsComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

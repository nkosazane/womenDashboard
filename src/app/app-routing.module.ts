import { DonationsComponent } from './component/donations/donations.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ChatsComponent } from './component/chats/chats.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { TablesComponent } from './component/tables/tables.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGuardService } from './service/auth-guard.service';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component:HomeComponent},
  {path: 'tables',component:TablesComponent},
  {path: 'user-profile',component:UserProfileComponent},
  {path: 'chats',component:ChatsComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'donations',component:DonationsComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

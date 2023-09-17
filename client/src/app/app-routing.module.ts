import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyCenterComponent } from './components/my-center/my-center.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'my-center', component: MyCenterComponent},
  {path: 'search', component: SearchComponent},
  {path: 'home', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

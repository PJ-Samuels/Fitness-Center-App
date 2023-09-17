import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';


import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { HomeNavComponent } from './components/home-nav/home-nav.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { MyCenterComponent } from './components/my-center/my-center.component';
import { SearchComponent } from './components/search/search.component';


// import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideFunctions,getFunctions } from '@angular/fire/functions';
// import { provideMessaging,getMessaging } from '@angular/fire/messaging';
// import { providePerformance,getPerformance } from '@angular/fire/performance';
// import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
// import { provideStorage,getStorage } from '@angular/fire/storage'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeNavComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserNavComponent,
    MyCenterComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
    // provideFunctions(() => getFunctions()),
    // provideMessaging(() => getMessaging()),
    // providePerformance(() => getPerformance()),
    // provideRemoteConfig(() => getRemoteConfig()),
    // provideStorage(() => getStorage()),
  ],
  // providers: [
  //   ScreenTrackingService,UserTrackingService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }

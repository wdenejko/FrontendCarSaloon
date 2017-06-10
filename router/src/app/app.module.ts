import { ConfirmLeaveGuard } from './services/confirmleave.guard';
import { LoggedUserGuard } from './services/loggeduser.guard';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent, canDeactivate: [ConfirmLeaveGuard]},
  {path: 'contact', component: ContactComponent, canActivate:[LoggedUserGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostService, LoggedUserGuard, ConfirmLeaveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

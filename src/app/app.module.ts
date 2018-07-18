import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DentistChennaiComponent } from './dentist-chennai/dentist-chennai.component';
import { AuthService } from './service/auth.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
 { path: 'dentist-chennai', component: DentistChennaiComponent },
  { path: 'edit', component: EditComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    EditComponent,
    AdminComponent,
    NotFoundComponent,
    DentistChennaiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

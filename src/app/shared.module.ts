import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './pages/login/login-form/login-form.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './pages/components/card/card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
		LoginFormComponent,
    HeaderComponent,
    CardComponent,
    HomeComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
		ReactiveFormsModule,
		HttpClientModule
  ],
  exports: [
    LoginComponent,
		LoginFormComponent,
    HeaderComponent,
    CardComponent,
    HomeComponent
  ]
})
export class SharedModule { }

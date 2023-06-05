import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    LoginComponent,
		LoginFormComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
		ReactiveFormsModule,
		HttpClientModule
  ],
  exports: [
    LoginComponent,
		LoginFormComponent,
    HomeComponent
  ]
})
export class SharedModule { }

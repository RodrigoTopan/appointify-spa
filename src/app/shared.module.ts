import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login/login-form/login-form.component';

@NgModule({
  declarations: [
    LoginComponent,
		LoginFormComponent
  ],
  imports: [
    CommonModule,
		ReactiveFormsModule,
		HttpClientModule
  ],
  exports: [
    LoginComponent,
		LoginFormComponent
  ]
})
export class SharedModule { }

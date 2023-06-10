import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './pages/login/login-form/login-form.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './pages/components/card/card.component';
import { CategoryComponent } from './pages/category/category.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OfferedServiceComponent } from './pages/offered-service/offered-service.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    CategoryComponent,
    MenuComponent,
    OfferedServiceComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    LoginComponent,
    LoginFormComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    CategoryComponent,
    MenuComponent,
    OfferedServiceComponent
  ]
})
export class SharedModule { }

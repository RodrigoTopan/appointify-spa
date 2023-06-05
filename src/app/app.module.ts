import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { JWT_OPTIONS, JwtHelperService, JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      },
    }),
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    JwtHelperService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => localStorage.getItem('token'),
    allowedDomains: ['*'], // Domínios permitidos para o envio do token
    disallowedRoutes: ['/users/authenticate','/users/register'], // Rotas onde o envio do token não é necessário
  };
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginEmpresa = false;
	loginCliente = false;

  constructor() { }

  ngOnInit(): void {
  }

	abrirLoginCliente() {
		this.loginCliente = true;
	}

	abrirLoginEmpresa() {
		this.loginEmpresa = true;
	}
}

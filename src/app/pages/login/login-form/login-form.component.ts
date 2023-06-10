import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
	loginForm!: FormGroup;
	isPasswordVisibilityOn = false;
	formInvalido = false;

  constructor(
		private router: Router,
		private jwtHelperService: JwtHelperService,
		private loginService: LoginService
	) {
		this.loginForm = new FormGroup({
			username: new FormControl(undefined, Validators.required),
			password: new FormControl(undefined, Validators.required)
		})
	}

  ngOnInit(): void {
  }

	changeVisibility(fieldId: string) {
		this.isPasswordVisibilityOn = !this.isPasswordVisibilityOn;
		const field = document.getElementById(fieldId) as HTMLElement;
		this.isPasswordVisibilityOn ? 
			field.setAttribute('type', 'text') : 
			field.setAttribute('type', 'password');
	}

	setVisibilityOn(element: HTMLElement) {
		element.classList.remove('visibility-off');
		element.classList.add('visibility-on');
	}

	setVisibilityOff(element: HTMLElement) {
		element.classList.remove('visibility-on');
		element.classList.add('visibility-off');
	}

	submitForm() {
		if(!this.loginForm.valid){
			this.formInvalido = true;
			return;
		}
		this.formInvalido = false;
		this.loginService
		.post(this.loginForm.value)
		.subscribe({
			next: res => {
				console.log(res)
				if (res.token) {
					// Decodifica o token JWT
					const decodedToken = this.jwtHelperService.decodeToken(res.token);
					console.log(decodedToken);
					// Salva as informações no localStorage
					//TODO: carregar essas informações diretamente do token e não da resposta
					localStorage.setItem('token', res.token);
					localStorage.setItem('username', res.username);
					localStorage.setItem('role', res.role);
					// Redireciona o usuário para o componente "Home"
					this.router.navigate(['/']);
				  }				
			}	
		});
	}

}

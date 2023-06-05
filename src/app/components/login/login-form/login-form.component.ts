import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

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
				console.log(res);				
			}	
		});
	}

}

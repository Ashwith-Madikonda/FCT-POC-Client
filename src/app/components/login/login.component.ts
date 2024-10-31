import { Component, inject } from '@angular/core';
import AppAuthService from '../../../services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import AppAuth from '../../models/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form = inject(FormBuilder).group({
    login: ['',Validators.required],
    password: ['',Validators.required]
  });
  constructor(private readonly appAuthService: AppAuthService) { }

  auth() {
    this.appAuthService.auth(this.form.value as unknown as AppAuth);
}
}

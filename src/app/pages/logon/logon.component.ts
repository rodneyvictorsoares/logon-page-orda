import { Component } from '@angular/core';
import { DefaultLogonLayoutComponent } from '../../components/default-logon-layout/default-logon-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-logon',
  standalone: true,
  imports: [
    DefaultLogonLayoutComponent,
    ReactiveFormsModule
  ],
  templateUrl: './logon.component.html',
  styleUrl: './logon.component.scss'
})
export class LogonComponent {
  loginForm!: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
}

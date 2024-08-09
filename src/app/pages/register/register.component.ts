import { Component } from '@angular/core';
import { DefaultLogonLayoutComponent } from '../../components/default-logon-layout/default-logon-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogonInputComponent } from '../../components/logon-input/logon-input.component';
import { Router } from '@angular/router';
import { LogonService } from '../../services/logon.service';
import { ToastrService } from 'ngx-toastr';

interface RegisterForm{
  name: FormControl,
  email: FormControl,
  password: FormControl,
  confirmPassword: FormControl
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    DefaultLogonLayoutComponent,
    ReactiveFormsModule,
    LogonInputComponent
  ],
  providers: [
    LogonService
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(
    private router: Router,
    private logonService: LogonService,
    private toastService: ToastrService
  ){
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.logonService.register(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password).subscribe({
      next: () => this.toastService.success("Usuário logado com sucesso!"),
      error: () => this.toastService.error("Erro ao acessar o sistema! Tente novamente em outro momento.")
    })
  }

  navigate(){
    this.router.navigate(["logon"])
  }
}

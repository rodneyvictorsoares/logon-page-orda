import { Component } from '@angular/core';
import { DefaultLogonLayoutComponent } from '../../components/default-logon-layout/default-logon-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogonInputComponent } from '../../components/logon-input/logon-input.component';
import { Router } from '@angular/router';
import { LogonService } from '../../services/logon.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logon',
  standalone: true,
  imports: [
    DefaultLogonLayoutComponent,
    ReactiveFormsModule,
    LogonInputComponent
  ],
  providers: [
    LogonService
  ],
  templateUrl: './logon.component.html',
  styleUrl: './logon.component.scss'
})
export class LogonComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private logonService: LogonService,
    private toastService: ToastrService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.logonService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastService.success("Usuário logado com sucesso!"),
      error: () => this.toastService.error("Erro ao acessar o sistema! Tente novamente em outro momento.")
    })
  }

  navigate(){
    this.router.navigate(["registrar"])
  }
}

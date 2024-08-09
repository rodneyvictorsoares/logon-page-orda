import { Routes } from '@angular/router';
import { LogonComponent } from './pages/logon/logon.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path: "logon",
        component: LogonComponent
    },
    {
        path: "registrar",
        component: RegisterComponent
    },
    {
        path: "usuario",
        component: UsuarioComponent,
        canActivate: [AuthGuard]
    }
];

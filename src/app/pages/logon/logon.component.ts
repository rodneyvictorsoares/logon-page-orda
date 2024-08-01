import { Component } from '@angular/core';
import { DefaultLogonLayoutComponent } from '../../components/default-logon-layout/default-logon-layout.component';

@Component({
  selector: 'app-logon',
  standalone: true,
  imports: [
    DefaultLogonLayoutComponent
  ],
  templateUrl: './logon.component.html',
  styleUrl: './logon.component.scss'
})
export class LogonComponent {

}

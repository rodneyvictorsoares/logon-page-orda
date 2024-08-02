import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-logon-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-logon-layout.component.html',
  styleUrl: './default-logon-layout.component.scss'
})
export class DefaultLogonLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
}

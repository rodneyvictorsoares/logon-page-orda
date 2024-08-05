import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() disablePrimaryBtn: boolean = true;
  
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }
}

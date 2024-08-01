import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLogonLayoutComponent } from './default-logon-layout.component';

describe('DefaultLogonLayoutComponent', () => {
  let component: DefaultLogonLayoutComponent;
  let fixture: ComponentFixture<DefaultLogonLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLogonLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultLogonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogonInputComponent } from './logon-input.component';

describe('LogonInputComponent', () => {
  let component: LogonInputComponent;
  let fixture: ComponentFixture<LogonInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogonInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

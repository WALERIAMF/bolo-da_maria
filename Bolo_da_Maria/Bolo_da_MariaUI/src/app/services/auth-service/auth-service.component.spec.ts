import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from './auth-service.component';

describe('AuthServiceComponent', () => {
  let component: AuthService;
  let fixture: ComponentFixture<AuthService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthService]
    });
    fixture = TestBed.createComponent(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

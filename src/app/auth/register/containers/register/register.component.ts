import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, Provider } from '../../../shared/services/auth/auth.service';

import { FuseConfigService } from '../../../../core/services/config.service';

@Component({
  selector: 'register',
  styleUrls: ['./register.component.scss'],
  template: `
    <auth-form (submit)="registerUser($event)" (popup)="loginPopup($event)">
      <h3>CREATE AN ACCOUNT</h3>
      <a routerLink="/auth/login" style="color: white">Already have an account?</a>
      <button
        mat-raised-button
        color="primary"
        type="submit">
        CREATE ACCOUNT
      </button>
      <div *ngIf="error" class="error">{{ error }}</div>
    </auth-form>
  `
})
export class RegisterComponent {

  error: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fuseConfig: FuseConfigService
  ) {
    this.fuseConfig.setSettings({
        layout: {
            navigation: 'none',
            toolbar   : 'none',
            footer    : 'none'
        }
    });
   }

  async registerUser(event: any) {
    if (event.value) {
      const { email, password } = event.value;
      try {
        await this.authService.createUser(email, password);
        this.router.navigate(['/']);
      } catch (err) {
        this.error = err.message;
      }
    }
  }

  async loginPopup(provider: Provider) {
        try {
            await this.authService.loginWithPopup(provider);
            this.router.navigate(['/']);
        } catch (err) {
            this.error = err.message;
        }
    }

}

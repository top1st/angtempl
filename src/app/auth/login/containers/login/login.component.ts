import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, Provider } from '../../../shared/services/auth/auth.service';

import { FuseConfigService } from '../../../../core/services/config.service';

@Component({
  selector: 'login',
  styleUrls: ['./login.component.scss'],
  template: `
    <auth-form (submit)="loginUser($event)" (popup)="loginPopup($event)">
      <h3>LOGIN TO YOUR ACCOUNT</h3>
      <a routerLink="/auth/register" style="color: white">Not registered?</a>
      <button
        mat-raised-button
        color="primary"
        type="submit">
        LOGIN
      </button>
      <div *ngIf="error" class="error">{{ error }}</div>
    </auth-form>
  `,
})
export class LoginComponent {

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

  async loginUser(event: any) {
    if (event.value) {
      const { email, password } = event.value;
      try {
        await this.authService.loginUser(email, password);
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

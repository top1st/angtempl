import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Provider } from '../../services/auth/auth.service';

@Component({
  selector: 'auth-form',
  template: `
    <div class="fullscreen-bg">
        <video autoplay loop muted class="fullscreen-bg__video">
            <source src="assets/video/welcome.mp4" type="video/mp4">
        </video>
        <div class="video-mask"></div>
    </div>
    <div class="welcome-intro">
        <h2>Welcome to the Rivetly Nexus Platform</h2>
        <p>This platform is a revolution in how people connect, communicate, collaborate, and curate information.</p>
        <button mat-button>LEARN MORE</button>
        <a mat-button routerLink="/auth/register">SIGN UP</a>
    </div>
    <div class="auth-form">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">

          <ng-content select="h3"></ng-content>

          <mat-form-field>
            <input
              matInput
              type="email"
              placeholder="Email address"
              formControlName="email">
            <mat-error *ngIf="invalidEmail">
              Invalid email format
            </mat-error>
          </mat-form-field>

          <mat-form-field>
            <input
              matInput
              type="password"
              placeholder="Enter password"
              formControlName="password">
            <mat-error>
              <span *ngIf="invalidPassword">Password is required</span>
              <span *ngIf="invalidLength">Password must be at least 6 characters</span>
            </mat-error>
          </mat-form-field>

          <ng-content select=".error"></ng-content>

          <div class="auth-form__action">
            <ng-content select="button"></ng-content>
          </div>

        <div class="auth-form__additional-options">
          
            <button (click)="popup.emit('Google')" mat-icon-button type="button">
                <i class="fa fa-google icon" aria-hidden="true"></i>
            </button>

            <button (click)="popup.emit('Facebook')" mat-icon-button type="button">
                <i class="fa fa-facebook icon" aria-hidden="true"></i>
            </button>

            <button (click)="popup.emit('Twitter')" mat-icon-button type="button">
                <i class="fa fa-twitter icon" aria-hidden="true"></i>
            </button>

            <button (click)="popup.emit('Github')" mat-icon-button type="button">
                <i class="fa fa-github icon" aria-hidden="true"></i>
            </button>

            <button mat-icon-button type="button">
                <i class="fa fa-mobile icon" aria-hidden="true"></i>
            </button>

            <button mat-icon-button type="button">
                <i class="fa fa-windows icon" aria-hidden="true"></i>
            </button>

        </div>

        <div class="auth-form__toggle">
            <ng-content select="a"></ng-content>
        </div>

        </form>
      </div>
  `,
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {

  @Output() submit = new EventEmitter<FormGroup>();

  @Output() popup = new EventEmitter<Provider>();

  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  get invalidEmail(): boolean {
    const control = this.form.get('email');
    return control.hasError('email') && control.touched;
  }

  get invalidPassword(): boolean {
    const control = this.form.get('password');
    return control.hasError('required') && control.touched && !this.invalidLength;
  }

  get invalidLength(): boolean {
    const control = this.form.get('password');
    return control.hasError('minlength') && control.touched;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submit.emit(this.form);
    }
  }

}

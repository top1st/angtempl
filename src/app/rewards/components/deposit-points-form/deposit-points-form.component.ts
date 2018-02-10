import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    styleUrls: ['./deposit-points-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'deposit-points-form',
    template: `
    <div class="deposit-points-form">
        <img src="/assets/img/background/redemption.png">
        <form [formGroup]="form" class="deposit-points-form__content" (ngSubmit)="deposit.next(form.value)">
            <p>Please enter your redemption code and click “Deposit”. Your account will be automatically credited with the value of your code. Enjoy your reward!</p>
            <mat-form-field>
                <input
                    placeholder="Reward Card Number"
                    matInput
                    color="primary"
                    formControlName="cardNumber">
                <mat-error *ngIf="invalid">Number must be 18 digits.</mat-error>
            </mat-form-field>
            <button mat-button [disabled]="form.invalid" color="primary">SUBMIT</button>
        </form>
    </div>
    `
})
export class DepositPointsFormComponent {

    @Output() deposit = new EventEmitter<string>();

    form: FormGroup;

    get invalid(): boolean {
        const input = this.form.get('cardNumber');
        return input.hasError('minlength') || input.hasError('maxlength');
    }
    
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            cardNumber: ['', [Validators.required, Validators.minLength(18), Validators.maxLength(18)]]
        });
    }

}

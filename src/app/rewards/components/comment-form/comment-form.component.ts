import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    template: `
    <div style="display: flex; flex-direction: column">
        <div style="display: flex;">
            <img src="/assets/img/background/avatar.png" style="width: 50px; height: 50px;">
            <div style="display: flex; flex-direction: column; margin-left: 8px;">
                <h3>Nancy Admin says:</h3>
                <p>Thanks for all the hard work and the late nights moving the ball forward on this SAP implementation.</p>
            </div>    
        </div>
        <form [formGroup]="form">
            <mat-form-field style="width: 100%;">
                <textarea
                    matInput
                    matTextareaAutosize
                    placeholder="Comment"
                    formControlName="comment">
                </textarea>
            </mat-form-field>
        </form>
    </div>
    `
})
export class CommentFormComponent {

    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            comment: ['', Validators.required]
        });
    }

}
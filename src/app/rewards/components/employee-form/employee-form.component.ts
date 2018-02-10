import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    template: `
    <form [formGroup]="form" style="display: flex;">
        <div style="margin: 8px;">
            <p>Personal Details</p>
            <mat-form-field>
                <input
                    matInput
                    placeholder="First Name"
                    formControlName="firstName"
                    required>
            </mat-form-field>
            <mat-form-field>
                <input
                    matInput
                    placeholder="Last Name"
                    formControlName="lastName">
            </mat-form-field>
            <mat-form-field>
                <input
                    matInput
                    placeholder="Employee Number"
                    formControlName="employeeNumber">
            </mat-form-field>
            <mat-file-input>
            </mat-file-input>
        </div>
        <div style="margin: 8px;">
            <p>Position Details</p>
            <mat-form-field>
                <input
                    matInput
                    placeholder="Department"
                    formControlName="department">
            </mat-form-field>
            <mat-form-field>
                <input
                    matInput
                    placeholder="Location"
                    formControlName="location">
            </mat-form-field>
            <mat-form-field>
                <input
                    matInput
                    placeholder="Manager"
                    formControlName="manager">
            </mat-form-field>
            <mat-form-field>
                <mat-select placeholder="Role" formControlName="role">
                    <mat-option value="employee">Employee</mat-option>
                    <mat-option value="manager">Manager</mat-option>
                    <mat-option value="srManager">Senior Manager</mat-option>
                </mat-select>
            </mat-form-field>
        </div>
    </form>
    `
})
export class EmployeeFormComponent {

    form: FormGroup;

    constructor(private fb: FormBuilder ) {
        this.form = this.fb.group({
            firstName: ['', Validators.required],
            lastName: [],
            employeeNumber: [],
            avatar: [],
            department: [],
            location: [],
            manager: [],
            role: []
        });
    }

}
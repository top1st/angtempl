import { Component } from '@angular/core';

import { DialogService } from '../../../shared';

import { EmployeeFormComponent } from '../../components';

import { NESTED_TABS } from '../tabs';

@Component({
    selector: 'manage-employees',
    styleUrls: ['./manage-employees.component.scss'],
    template: `
    <app-page
        [titleText]="'Manage Employees'"
        [headerImage]="'/assets/img/background/image-4.png'"
        [tabs]="tabs"
        [selectedTab]="'manage'">
        <p>Search for an employee using their Employee ID, Last Name, Location or Department. You can add an employee to the program by clicking on +Add Employee.</p>
        <p>To update employee information, including termination, click on Edit. If an employee has not yet registered with All Rewards, you can print their registration letter by clicking Details.</p>
        <mat-toolbar>
            Employees
            <span class="flexible-space"></span>
            <mat-form-field
                floatPlaceholder="never"
                color="primary"
                style="flex: 1 1 auto; font-size: smaller; height: 56px; line-height: .9; max-width: 500px;">
                <mat-icon matPrefix>search</mat-icon>
                <input
                    matInput
                    type="search"
                    placeholder="Search by employee ID or last name">
            </mat-form-field>
            <span class="flexible-space"></span>
            <button mat-button (click)="presentAddEmployee()">CREATE</button>
        </mat-toolbar>
        <div class="manage-employees">
            <div class="manage-employees__sidenav" style="padding: 8px;">
                <mat-form-field>
                    <mat-select placeholder="Location"></mat-select>
                </mat-form-field>
                <mat-form-field>
                    <mat-select placeholder="Department"></mat-select>
                </mat-form-field>
            </div>
            <div class="manage-employees__content">
                <mat-list>
                    <mat-list-item *ngFor="let employee of employees" style="cursor: pointer;">
                        <img matListAvatar [src]="employee.avatar">
                        <h3 matLine> {{employee.name}} </h3>
                    </mat-list-item>
                </mat-list>
            </div>
        </div>
    </app-page>
    `
})
export class ManageEmployeesComponent {

    get tabs() {
        return NESTED_TABS;
    }

    employees: { avatar: string, name: string }[] = [
        {
            name: 'Karson Braaten',
            avatar: '/assets/img/background/avatar.png',
        },
        {
            name: 'Dawson Jones',
            avatar: '/assets/img/background/avatar.png'
        },
        {
            name: 'Mario',
            avatar: '/assets/img/background/avatar.png',
        },
        {
            name: 'Luigi',
            avatar: '/assets/img/background/avatar.png'
        }
    ]

    constructor(private dialog: DialogService) {}

    presentAddEmployee() {
        this.dialog.prompt({
            formComponent: EmployeeFormComponent,
            close: 'CANCEL',
            ok: 'CREATE',
            title: 'Create Employee'
        })
    }

}

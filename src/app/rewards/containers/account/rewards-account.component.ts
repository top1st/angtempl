import { Component } from '@angular/core';

import { TABS } from '../tabs';

@Component({
    styleUrls: ['./rewards-account.component.scss'],
    selector: 'rewards-account',
    template: `
    <app-page
        [titleText]="'Account'"
        [headerImage]="'/assets/img/background/image-4.png'"
        [tabs]="tabs"
        [selectedTab]="'account'">
        <mat-grid-list cols="3" rowHeight="200" class="mat-elevation-z6">
            <mat-grid-tile [colspan]="3" [rowspan]="1">
                <div
                    style="background-color: whitesmoke; display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; height: 100%; width: 100%; cursor: pointer;">
                    Current Balance Component
                </div>
            </mat-grid-tile>
        </mat-grid-list>
        <mat-toolbar>
            Transactions
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
        </mat-toolbar>
        <div class="rewards-account">
            <div class="rewards-account__sidenav" style="padding: 8px;">
                <mat-form-field>
                    <mat-select placeholder="Location"></mat-select>
                </mat-form-field>
                <mat-form-field>
                    <mat-select placeholder="Department"></mat-select>
                </mat-form-field>
                <mat-form-field>
                    <input matInput placeholder="Start Date" [matDatepicker]="startPicker">
                    <mat-datepicker-toggle matSuffix [for]="startPicker"></mat-datepicker-toggle>
                    <mat-datepicker #startPicker></mat-datepicker>
                </mat-form-field>
                <mat-form-field>
                    <input matInput placeholder="End Date" [matDatepicker]="endPicker">
                    <mat-datepicker-toggle matSuffix [for]="endPicker"></mat-datepicker-toggle>
                    <mat-datepicker #endPicker></mat-datepicker>
                </mat-form-field>
            </div>
            <div class="rewards-account__content">
                <mat-list>
                    <mat-list-item *ngFor="let record of records" style="cursor: pointer;">
                        <h3 matLine> {{record.name}} </h3>
                    </mat-list-item>
                </mat-list>
            </div>
        </div>
    </app-page>
    `
})
export class RewardsAccountComponent {

    get tabs() {
        return TABS;
    }

    records = [
        { name: 'result 1' },
        { name: 'result 2' },
        { name: 'result 3' },
    ]

}

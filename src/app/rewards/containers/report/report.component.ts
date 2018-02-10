import { Component } from '@angular/core';

import { NESTED_TABS } from '../tabs';

@Component({
    styleUrls: ['./report.component.scss'],
    template: `
    <app-page
        [titleText]="'Report'"
        [headerImage]="'/assets/img/background/image-4.png'"
        [tabs]="tabs"
        [selectedTab]="'reports'">
        <mat-toolbar>
            Reports
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
        <div class="report">
            <div class="report__sidenav" style="padding: 8px;">
                <mat-form-field>
                    <mat-select placeholder="Location"></mat-select>
                </mat-form-field>
                <mat-form-field>
                    <mat-select placeholder="Department"></mat-select>
                </mat-form-field>
                <mat-form-field>
                    <mat-select placeholder="Award Name"></mat-select>
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
            <div class="report__content">
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
export class ReportComponent {

    get tabs() {
        return NESTED_TABS;
    }

    records = [
        { name: 'result 1' },
        { name: 'result 2' },
        { name: 'result 3' },
    ]

}

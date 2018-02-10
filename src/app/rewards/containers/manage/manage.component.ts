import { Component } from '@angular/core';

import { DialogService } from '../../../shared';

import { TABS } from '../tabs';

@Component({
    selector: 'rewards-manage',
    template: `
    <app-page
        [titleText]="'Manage'"
        [headerImage]="'/assets/img/background/image-4.png'"
        [tabs]="tabs"
        [selectedTab]="'manage'">
        <mat-grid-list cols="3">
            <mat-grid-tile [colspan]="1" [rowspan]="1">
                <div
                    style="background-color: whitesmoke; display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; height: 100%; width: 100%; cursor: pointer;">
                    BALANCE
                </div>
            </mat-grid-tile>
            <mat-grid-tile [colspan]="1" [rowspan]="1">
                <div
                    style="background-color: whitesmoke; display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; height: 100%; width: 100%; cursor: pointer;">
                    PENDING NOMINATIONS    
                </div>
            </mat-grid-tile>
            <mat-grid-tile [colspan]="1" [rowspan]="2">
                <div
                    style="background-color: whitesmoke; display: flex; flex-direction: column; text-decoration: none; height: 100%; width: 100%; cursor: pointer;">
                    <ul>
                        <li><a [routerLink]="'issue'">Issue awards</a></li>
                        <li><a [routerLink]="'employees'">Manage employees</a></li>
                        <li><a [routerLink]="'../programs/nominate'">Nominate</a></li>
                    </ul>    
                </div>
            </mat-grid-tile>
            <mat-grid-tile [colspan]="1" [rowspan]="1">
                <div
                    style="background-color: whitesmoke; display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; height: 100%; width: 100%; cursor: pointer;">
                    AWARDS ISSUED
                </div>
            </mat-grid-tile>
            <mat-grid-tile [colspan]="1" [rowspan]="1">
                <div
                    style="background-color: whitesmoke; display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; height: 100%; width: 100%; cursor: pointer;">
                    UPCOMING AWARDS    
                </div>
            </mat-grid-tile>
        </mat-grid-list>
    </app-page>
    `
})
export class ManageRewardsComponent {

    get tabs() {
        return TABS;
    }

    constructor(private dialog: DialogService) {}

}

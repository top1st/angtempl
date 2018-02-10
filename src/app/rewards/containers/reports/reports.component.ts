import { Component } from '@angular/core';

import { TABS } from '../tabs';

@Component({
    template: `
    <app-page
        [titleText]="'Reports'"
        [headerImage]="'/assets/img/background/image-4.png'"
        [tabs]="tabs"
        [selectedTab]="'reports'">
        <a [routerLink]="['1']">redemptions report,</a>
        <a [routerLink]="['1']">purhcased cards report,</a>
        <a [routerLink]="['1']">award reports,</a>
        <a [routerLink]="['1']">taxable benefit report</a>
    </app-page>
    `
})
export class ReportsComponent {
    
    get tabs() {
        return TABS;
    }

}

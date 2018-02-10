import { Component } from '@angular/core';

import { NESTED_TABS } from '../tabs';

@Component({
    template: `
    <app-page
        [titleText]="'Deposit'"
        [headerImage]="'/assets/img/background/image-4.png'"
        [tabs]="tabs"
        [selectedTab]="'home'">
        <deposit-points-form (deposit)="onDeposit($event)">
        </deposit-points-form>
    </app-page>
    `
})
export class DepositComponent {

    get tabs() {
        return NESTED_TABS;
    }

    onDeposit(pin: string) {
        console.log(pin)
    }

}

import { Component } from '@angular/core';

import { TABS } from '../tabs';

@Component({
    template: `
    <app-page
        [titleText]="'Programs'"
        [headerImage]="'/assets/img/background/image-4.png'"
        [tabs]="tabs"
        [selectedTab]="'programs'">
        <a [routerLink]="'nominate'">Nominate</a>
    </app-page>
    `
})
export class ProgramsComponent {

    get tabs() {
        return TABS;
    }

}

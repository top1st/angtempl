import { Component } from '@angular/core';

import { NESTED_TABS } from '../tabs';

@Component({
    template: `
    <app-page
        [titleText]="'Peer to Peer Recognition'"
        [headerImage]="'/assets/img/background/image-4.png'"
        [tabs]="tabs"
        [selectedTab]="'nominate'">
        <issue-awards-form>
        </issue-awards-form>
    </app-page>
    `
})
export class IssueAwardsComponent {

    get tabs() {
        return NESTED_TABS;
    }

}

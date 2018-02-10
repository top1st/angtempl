import { Component } from '@angular/core';

import { NESTED_TABS } from '../tabs';

@Component({
    template: `
    <app-page
        [titleText]="'Peer to Peer Recognition'"
        [headerImage]="'/assets/img/background/image-4.png'"
        [tabs]="tabs"
        [selectedTab]="'programs'">
        <issue-awards-form [hideAmountStep]="true">
        </issue-awards-form>
    </app-page>
    `
})
export class PeerToPeerRecognitionComponent {

    get tabs() {
        return NESTED_TABS;
    }

}

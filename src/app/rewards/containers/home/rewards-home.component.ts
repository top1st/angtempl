import { Component, NgZone } from '@angular/core';

import { DialogService } from '../../../shared';

import { CommentFormComponent } from '../../components';

import { TABS } from '../tabs';

@Component({
    selector: 'rewards-home',
    template: `
    <app-page
        [titleText]="'All Rewards'"
        [headerImage]="'/assets/img/background/image-4.png'"
        [tabs]="tabs"
        [selectedTab]="'home'">
        <div style="margin: 16px;">    
            <h1>Welcome Sys!</h1>
            <p>All Rewards is All Weather Windows’ online reward and recognition system that allows employees to acknowledge each other for their actions, performance, and contributions.</p>
        </div>
        <mat-grid-list
            [cols]="3"
            rowHeight="240px"
            gutterSize="16">
            <mat-grid-tile [colspan]="1" [rowspan]="1"  class="mat-elevation-z6">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; height: 100%; width: 100%; cursor: pointer;">
                    <h1>Balance</h1>
                </div>
            </mat-grid-tile>
            <mat-grid-tile [colspan]="1" [rowspan]="1"  class="mat-elevation-z6">
                <div
                    (click)="presentDeposit()"
                    style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; height: 100%; width: 100%; cursor: pointer;">
                    <h1><a [routerLink]="'deposit'">Deposit</a></h1>
                </div>
            </mat-grid-tile>
            <mat-grid-tile [colspan]="1" [rowspan]="1"  class="mat-elevation-z6">
                <div
                    style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; height: 100%; width: 100%; cursor: pointer;">
                    <h1><a [routerLink]="'../programs/nominate'">Nominate Peer</a></h1>
                </div>
            </mat-grid-tile>
            <mat-grid-tile [colspan]="3" [rowspan]="2" class="mat-elevation-z6">
                <news-feed (selected)="presentComment($event)" style="height: 100%; width: 100%;"></news-feed>
            </mat-grid-tile>
        </mat-grid-list>
    </app-page>
    `
})
export class RewardsHomeComponent {

    get tabs() {
        return TABS
    }

    constructor(private dialog: DialogService) {}

    presentDeposit() {
        // this.dialog.prompt({
        //     formComponent: DepositPointsFormComponent,
        //     close: 'CANCEL',
        //     ok: 'DEPOSIT',
        //     title: 'Deposit Your All Rewards Card'
        // });
    }

    presentNominatePeer() {
        // this.dialog.prompt({
        //     formComponent: RecognizePeerFormComponent,
        //     close: 'CANCEL',
        //     ok: 'NOMINATE',
        //     title: 'Nominate Peer'
        // });
    }

    presentComment(item) {
        this.dialog.prompt({
            formComponent: CommentFormComponent,
            close: 'CANCEL',
            ok: 'COMMENT',
            title: 'Review Details For Jordan Jones'
        });
    }

}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface Tab {
    id: string,
    name: string,
    route: string
}

declare interface Nav {
    title: string
    type: string
    icon?: string
    children?: Nav[]
    url?: string
}

@Component({
    styleUrls: ['./app-page.component.scss'],
    selector: 'app-page',
    template: `
    <div class="app-page">
            <div
                class="header"
                [style.background-image]="url">
                <div class="header-top">
                        <div style="display: flex; align-items: center; margin: 0 8px;">
                            <nav *ngIf="tabs" mat-tab-nav-bar>
                                <a
                                    mat-tab-link
                                    *ngFor="let tab of tabs"
                                    [routerLink]="tab.route"
                                    routerLinkActive #rla="routerLinkActive"
                                    [active]="tab.id === selectedTab">
                                    {{ tab.name }}
                                </a>
                            </nav>
                            <a
                                mat-icon-button
                                [routerLink]="'/cart'"
                                style="color: rgba(255,255,255,.66);">
                                <mat-icon>shopping_cart</mat-icon>
                            </a>
                        </div>
                    </div>
                <div class="header-content">
                    
                    <div class="header-bottom">
                        <h1>{{ titleText }}</h1>
                    </div>
                </div>
            </div>
            <div class="content">
                <ng-content></ng-content>
            </div>
    `
})
export class AppPageComponent {

    @Input() titleText: string;
    
    @Input() headerImage: string;

    @Input() tabs: Tab[];

    @Input() selectedTab = 'home';

    get url(): string {
        return `url(${this.headerImage})`;
    }

}

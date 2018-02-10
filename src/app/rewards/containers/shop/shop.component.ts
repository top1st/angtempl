import { Component } from '@angular/core';

import { DialogService } from '../../../shared';

import { AddProductFormComponent } from '../../components';

import { TABS } from '../tabs';

@Component({
    selector: 'rewards-shop',
    styleUrls: ['./shop.component.scss'],
    template: `
    <app-page
        [titleText]="'Shop'"
        [headerImage]="'/assets/img/background/image-4.png'"
        [tabs]="tabs"
        [selectedTab]="'shop'">
        <div class="shop">
            <div class="shop__sidenav">
                <p>Category</p>
                <p>Books, Movies & Music</p>
                <p>Department Store</p>
                <p>Electronics & Entertainment</p>
                <p>Everyday (Grocery etc.)</p>
                <p>For Business Gas, Automotive & Convenience</p>
                <p>Health & Beauty</p>
                <p>House & Home</p>
                <p>Just For Kids</p>
                <p>Men's Fashion & Accessories</p>
                <p>Misc.</p>
                <p>Multi-Retailer Prepaid Cards</p>
                <p>Restaurants & Fine Dining</p>
                <p>Specialty</p>
                <p>Sporting and Outdoor</p>
                <p>Sweets & Treats</p>
                <p>Travel</p>
                <p>Women's Fashion & Accessories</p>
            </div>
            <div class="shop__content">
                <mat-toolbar>
                    <mat-form-field
                        floatPlaceholder="never"
                        color="primary"
                        style="flex: 1 1 auto; font-size: smaller; height: 56px; line-height: .9;">
                        <mat-icon matPrefix>search</mat-icon>
                        <input
                            matInput
                            type="search"
                            placeholder="Search">
                    </mat-form-field>
                </mat-toolbar>
                <mat-grid-list cols="4" gutterSize="3" style="margin: 3px 0; margin-left: 3px;">
                    <mat-grid-tile
                        *ngFor="let item of items; index as i;"
                        style="background-color: whitesmoke; cursor: pointer;"
                        (click)="presentAddProductDialog(i)">
                        {{ item.name }}
                    </mat-grid-tile>
                </mat-grid-list>
            </div>
        </div>
    </app-page>
    `
})
export class ShopComponent {

    items: { id: string, name: string }[] = [
        { id: '1', name: 'Product 1' },
        { id: '2', name: 'Product 2' },
        { id: '3', name: 'Product 3' },
        { id: '4', name: 'Product 4' },
        { id: '5', name: 'Product 5' },
    ]

    get tabs() {
        return TABS;
    }

    constructor(private dialog: DialogService) {}

    presentAddProductDialog(productId: string) {
        this.dialog.prompt({
            formComponent: AddProductFormComponent,
            close: 'CANCEL',
            ok: 'ADD',
            title: 'Add Product'
        })
    }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    styleUrls: ['./add-product-form.component.scss'],
    template: `
    <div class="add-product-form">
        <div class="add-product-form__sidenav">
            <mat-grid-list cols="2" gutterSize="3">
                <mat-grid-tile
                    *ngFor="let item of brands; index as i;"
                    style="background-color: whitesmoke;">
                    Brand {{ item.id }}
                </mat-grid-tile>
            </mat-grid-list>
        </div>
        <form [formGroup]="form" class="add-product-form__content">
            <mat-tab-group>
                <mat-tab label="Digital">
                    <mat-form-field>
                        <mat-select placeholder="Denom">
                            <mat-option *ngFor="let denom of denoms" value="denom">
                                {{ denom.value }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field>
                        <input
                            type="number"
                            matInput
                            placeholder="Quantity">
                    </mat-form-field>
                </mat-tab>
                <mat-tab label="Physical">
                    <mat-form-field>
                        <mat-select placeholder="Denom">
                            <mat-option *ngFor="let denom of denoms" value="denom">
                                {{ denom.value }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field>
                        <input
                            type="number"
                            matInput
                            placeholder="Quantity">
                    </mat-form-field>
                </mat-tab>
            </mat-tab-group>
        </form>
    </div>
    `
})
export class AddProductFormComponent {

    brands: { id: string }[] = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
    ]

    denoms: { value: number }[] = [
        { value: 25 },
        { value: 50 },
        { value: 100 }
    ]

    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({});
    }
}

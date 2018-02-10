import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface CollectionItem<T> {
    route: string
    image: string
    subtitle?: string
    title: string
}

@Component({
    selector: 'nxs-collection',
    template: `
    <ng-container *ngIf="loading; else loaded">
        <div class="loading-container">
            <mat-spinner [diameter]="24"></mat-spinner>
        </div>
    </ng-container>
    <ng-template #loaded>
        <ng-container *ngIf="error; else success">
            <div class="error-state-container">
                <p>{{ error }}</p>
            </div>
        </ng-container>
        <ng-template #success>
            <mat-grid-list cols="4" gutterSize="8px">
                <mat-grid-tile *ngIf="showAdd" class="mat-elevation-z6">
                    <div
                        style="display: flex; flex-direction: column; align-items: center; justify-content: center; color: #2196F3; text-decoration: none; height: 100%; width: 100%; cursor: pointer;"
                        (click)="create.emit()">
                        <mat-icon
                            color="primary"
                            style="font-size: 48px; height: 48px; width: 48px;">
                            add
                        </mat-icon>
                        <span>{{ addText }}</span>
                    </div>
                </mat-grid-tile>
                <mat-grid-tile
                    *ngFor="let item of items"
                    class="mat-elevation-z6">
                    <div
                        style="display: flex; flex-direction: column; align-items: center; justify-content: center; color: #2196F3; text-decoration: none; height: 100%; width: 100%;">
                        <a [routerLink]="config(item).route" style="height: 100%; width: 100%;">
                            <img [src]="config(item).image" style="height: 100%; width: 100%; object-fit: cover;">
                        </a>
                        <mat-grid-tile-footer>
                            <a [routerLink]="config(item).route" style="color: white; text-decoration: none;">{{ config(item).title }}</a>
                            <span class="flexible-space"></span>
                            <button mat-icon-button [matMenuTriggerFor]="menu">
                                <mat-icon>more_vert</mat-icon>
                            </button>
                            <mat-menu #menu="matMenu">
                                <a mat-menu-item [routerLink]="['admin', config(item).route]">
                                    <mat-icon>edit</mat-icon>
                                    <span>Edit</span>
                                </a>
                                <button mat-menu-item>
                                    <mat-icon>delete</mat-icon>
                                    <span>Delete</span>
                                </button>
                            </mat-menu>
                        </mat-grid-tile-footer>
                    </div>
                </mat-grid-tile>
            </mat-grid-list>
        </ng-template>
    </ng-template>
    `
})
export class CollectionComponent<T> {

    @Input() addText = 'Add new';
    @Input() showAdd = true;
    @Input() config: (T) => CollectionItem<T>;
    @Input() items: T[];
    @Input() error: string;
    @Input() loading: boolean;

    @Output() create = new EventEmitter();

}

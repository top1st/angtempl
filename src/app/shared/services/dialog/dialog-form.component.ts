import { Component, ChangeDetectionStrategy, ComponentFactoryResolver, Inject, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormComponent, PromptConfig } from './dialog.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <h2
        *ngIf="dialog.title"
        mat-dialog-title>
        {{ dialog.title }}
    </h2>
    <mat-dialog-content>
        <ng-container
            dialogContent
            #contentRef="dialogContent"
            [content]="dialog.formComponent">
        </ng-container>
    </mat-dialog-content>
    <mat-dialog-actions>
        <button
            mat-button
            mat-dialog-close
            color="primary">
            {{ dialog.close }}
        </button>
        <button
            *ngIf="dialog.ok"
            mat-button
            color="primary"
            [disabled]="contentRef.form.invalid"
            (click)="dialogRef.close(contentRef.form.value)">
            {{ dialog.ok }}
        </button>
    </mat-dialog-actions>
    `
})
export class DialogFormComponent {
    
    get dialog(): PromptConfig {
        return this.data;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: PromptConfig,
        public dialogRef: MatDialogRef<DialogFormComponent>
    ) {}

}

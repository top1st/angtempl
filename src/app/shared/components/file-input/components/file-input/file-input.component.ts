import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'mat-file-input',
    styleUrls: ['./file-input.component.scss'],
    template: `
    <label>{{ fieldName }}</label>
    <input
        type="file"
        style="margin: 16px 0;"
        (change)="onChange($event)">
    `
})
export class FileInputComponent {

    @Input() fieldName: string;

    @Output() upload = new EventEmitter<File>();

    onChange(event) {
        const file = event.target.files[0] as File | null;
        if (file) {
            this.upload.emit(file);
        }
    }

}


/*
<div class="file-input-container">
    <div class="file-input-container__upload">
        <button
            mat-raised-button
            color="primary">
            CHOOSE FILE
            <input type="file">
        </button>
    </div>
    <mat-form-field>
        <input
            matInput
            placeholder="Background Image">
    </mat-form-field>
</div>
*/

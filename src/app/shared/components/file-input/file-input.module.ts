import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as fromMat from '@angular/material';

import * as fromComponents from './components';

@NgModule({
    imports: [
        CommonModule,
        fromMat.MatButtonModule,
        fromMat.MatFormFieldModule,
        fromMat.MatInputModule
    ],
    declarations: [
        ...fromComponents.components
    ],
    exports: [
        fromComponents.FileInputComponent
    ]
})
export class FileInputModule {}

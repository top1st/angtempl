import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import * as fromMat from '@angular/material';

import * as fromComponents from './components';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        fromMat.MatButtonModule,
        fromMat.MatIconModule,
        fromMat.MatGridListModule,
        fromMat.MatMenuModule,
        fromMat.MatProgressSpinnerModule,
    ],
    declarations: [
        ...fromComponents.components
    ],
    exports: [
        fromComponents.CollectionComponent
    ]
})
export class CollectionModule {}

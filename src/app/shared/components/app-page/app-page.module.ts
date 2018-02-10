import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import * as fromMat from '@angular/material';

import { AppShellModule } from '../app-shell';

import { AppPageComponent } from './app-page.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        fromMat.MatButtonModule,
        fromMat.MatExpansionModule,
        fromMat.MatIconModule,
        fromMat.MatListModule,
        fromMat.MatSidenavModule,
        fromMat.MatTabsModule,
        AppShellModule
    ],
    declarations: [
        AppPageComponent
    ],
    exports: [
        AppPageComponent
    ]
})
export class AppPageModule {}

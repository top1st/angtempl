import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import * as fromMat from '@angular/material';

import * as fromShared from '../shared';

import { SharedModule } from './shared/shared.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';

const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: fromContainers.RewardsHomeComponent },
    { path: 'home/deposit', component: fromContainers.DepositComponent },
    { path: 'shop', component: fromContainers.ShopComponent },
    { path: 'programs', component: fromContainers.ProgramsComponent },
    { path: 'programs/nominate', component: fromContainers.PeerToPeerRecognitionComponent },
    { path: 'account', component: fromContainers.RewardsAccountComponent },
    { path: 'reports', component: fromContainers.ReportsComponent },
    { path: 'reports/:reportId', component: fromContainers.ReportComponent },
    { path: 'manage', component: fromContainers.ManageRewardsComponent },
    { path: 'manage/employees', component: fromContainers.ManageEmployeesComponent },
    { path: 'manage/issue', component: fromContainers.IssueAwardsComponent },
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        fromMat.MatAutocompleteModule,
        fromMat.MatButtonModule,
        fromMat.MatCardModule,
        fromMat.MatCheckboxModule,
        fromMat.MatDatepickerModule,
        fromMat.MatNativeDateModule,
        fromMat.MatFormFieldModule,
        fromMat.MatGridListModule,
        fromMat.MatIconModule,
        fromMat.MatInputModule,
        fromMat.MatListModule,
        fromMat.MatRadioModule,
        fromMat.MatSelectModule,
        fromMat.MatStepperModule,
        fromMat.MatSidenavModule,
        fromMat.MatTabsModule,
        fromMat.MatToolbarModule,
        fromShared.AppPageModule,
        fromShared.DialogModule,
        fromShared.FileInputModule,
        SharedModule
    ],
    declarations: [
        ...fromContainers.containers,
        ...fromComponents.components
    ],
    entryComponents: [
        fromComponents.AddProductFormComponent,
        fromComponents.CommentFormComponent,
        fromComponents.DepositPointsFormComponent,
        fromComponents.EmployeeFormComponent,
        fromComponents.RecognizePeerFormComponent
    ],
    providers: [
        fromShared.DialogService
    ]
})
export class RewardsModule {}

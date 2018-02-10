import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    MatToolbarModule
} from '@angular/material';

import { EmployeesService } from '../../../../services';

import { IssueAwardsFormComponent } from './issue-awards-form.component';
import { AmountSelectorComponent } from './amount-selector/amount-selector.component';
import { EmployeeSelectorComponent } from './employee-selector/employee-selector.component';
import { SelectedEmployeesComponent } from './selected-employees/selected-employees.component';
import { EmployeeMessagesComponent } from './employee-messages/employee-messages.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatRadioModule,
        MatSelectModule,
        MatStepperModule,
        MatToolbarModule
    ],
    declarations: [
        EmployeeMessagesComponent,
        SelectedEmployeesComponent,
        EmployeeSelectorComponent,
        IssueAwardsFormComponent,
        AmountSelectorComponent,
    ],
    exports: [
        IssueAwardsFormComponent,
        EmployeeSelectorComponent
    ],
    providers: [
        EmployeesService
    ]
})
export class IssueAwardsFormModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IssueAwardsFormModule } from './components/issue-awards-form/issue-awards-form.module';

@NgModule({
    imports: [
        CommonModule,
        IssueAwardsFormModule
    ],
    exports: [
        IssueAwardsFormModule
    ]
})
export class SharedModule {}

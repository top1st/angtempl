import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';

import { DialogContentDirective } from './dialog-content.directive';

import { DialogFormComponent } from './dialog-form.component';
import { DialogComponent } from './dialog.component';

@NgModule({
    imports: [
      CommonModule,
      MatButtonModule,
      MatFormFieldModule,
      MatDialogModule,
      MatInputModule
    ],
    declarations: [
      DialogContentDirective,
      DialogFormComponent,
      DialogComponent
    ],
    entryComponents: [
      DialogFormComponent,
      DialogComponent
    ]
})
export class DialogModule {}

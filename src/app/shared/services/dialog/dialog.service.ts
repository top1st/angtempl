import { Injectable, Type } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { MatDialog } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { DialogFormComponent } from './dialog-form.component';
import { DialogComponent } from './dialog.component';

export interface AlertConfig {
  title?: string,
  content?: string,
  close: string
}

export interface ConfirmConfig {
  title?: string,
  content?: string,
  ok?: string,
  close: string
}

export interface FormComponent {
    form: FormGroup;
}

export interface PromptConfig {
  formComponent: Type<FormComponent>,
  title?: string,
  content?: string,
  ok?: string,
  close: string
}

@Injectable()
export class DialogService {

    constructor(
        private dialog: MatDialog
    ) {}

    alert(alert: AlertConfig) {
      const dialogRef = this.dialog.open(DialogComponent,
        { width: '287px', data: alert }
      );
      return dialogRef.afterClosed();
    }

    confirm(confirm: ConfirmConfig) {
      const dialogRef = this.dialog.open(DialogComponent,
        { width: '287px', data: confirm }
      );
      return dialogRef.afterClosed().map(Boolean);
    }

    prompt(prompt: PromptConfig) {
      const dialogRef = this.dialog.open(DialogFormComponent,
        { width: '717px', data: prompt }
      );
      return dialogRef.afterClosed().filter(Boolean)
    }

}

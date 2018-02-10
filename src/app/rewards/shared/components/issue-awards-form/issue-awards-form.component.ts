import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'issue-awards-form',
    styleUrls: ['./issue-awards-form.component.scss'],
    templateUrl: './issue-awards-form.component.html'
})
export class IssueAwardsFormComponent implements OnChanges {

    @Input() amount: number;
    @Input() hideAmountStep: boolean;

    @Output() create = new EventEmitter();

    formValue: Observable<any>;

    form: FormGroup;
  
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            amount: [this.amount || '', Validators.required],
            selector: [''],
            employees: this.fb.array([]),
            publicMessage: [''],
            postOnRecentlyRecognized: [true],
            privateMessage: ['']
        });
    }

    ngOnChanges() {
        if (this.amount) {
            this.form.get('amount').setValue(this.amount);
        }
    }
  
    ngOnInit() {
      this.formValue = this.form.valueChanges;
    }

    createEmployee(employee) {
        return this.fb.group(employee)
    }

    addEmployee(employee) {
        this.employees.push(this.createEmployee(employee));
    }

    removeEmployee(index) {
        this.employees.removeAt(index);
    }

    get amountRequired(): boolean {
        return this.form.get('amount').hasError('required');
    }

    get employees(): FormArray {
        return this.form.get('employees') as FormArray;
    }

    onSubmit(value) {
        this.create.emit(value);
    }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Employee, EmployeesService } from '../../../../../services';

@Component({
    selector: 'employee-selector',
    templateUrl: './employee-selector.component.html'
})
export class EmployeeSelectorComponent implements OnInit {

    @Input() parent: FormGroup;

    @Output() added = new EventEmitter();

    filtered: Observable<Employee[]>;

    get selector(): FormControl {
        return this.parent.get('selector') as FormControl;
    }

    constructor(
        private employeesService: EmployeesService
    ) { }

    ngOnInit() {
        this.filtered = Observable.combineLatest(
            this.employeesService.all$,
            this.selector.valueChanges.startWith(''),
            (employees: Employee[], term: any) => ({ employees, term })
        )
        .map(result => result.employees.filter(employee => {
            if (!result.term || result.term.id) { return []; }
            return employee.name.toLowerCase().indexOf(result.term.toLowerCase()) !== -1
        }));
    }

     onAdd(event: MatAutocompleteSelectedEvent) {
        this.added.next(event.option.value);
        this.selector.reset();
     }

}

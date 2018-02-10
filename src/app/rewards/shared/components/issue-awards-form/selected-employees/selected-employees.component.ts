import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
    selector: 'selected-employees',
    templateUrl: './selected-employees.component.html'
})
export class SelectedEmployeesComponent {

    @Input() parent: FormGroup;
    
    @Output() remove = new EventEmitter<number>();

    onRemove(index: number) {
        this.remove.next(index);
    }

    get employees() {
        return (this.parent.get('employees') as FormArray).controls;
    }

}

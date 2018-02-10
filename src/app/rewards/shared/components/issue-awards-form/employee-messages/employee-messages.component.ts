import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'employee-messages',
    templateUrl: './employee-messages.component.html'
})
export class EmployeeMessagesComponent {

    @Input() parent: FormGroup;

}

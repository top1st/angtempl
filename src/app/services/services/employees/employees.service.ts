import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { EMPLOYEES } from './employees';

export interface Employee {
    id: string
    name: string
    lastName: string
    avatar: string
    nickname: string
    company: string
    jobTitle: string
    email: string
    phone: string
    address: string
    birthday: string
    notes: string
    location: string
    department: string
}

@Injectable()
export class EmployeesService {
    
    all$: Observable<Employee[]> = Observable.of(EMPLOYEES);

}
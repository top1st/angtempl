import { AppsService } from './apps/apps.service';
import { EmployeesService } from './employees/employees.service';
import { ProgramsService } from './programs/programs.service';
import { SpacesService } from './spaces/spaces.service';

export const services = [
    AppsService,
    EmployeesService,
    ProgramsService,
    SpacesService
]

export * from './apps/apps.service';
export * from './employees/employees.service';
export * from './programs/programs.service';
export * from './spaces/spaces.service';

import { ModuleWithProviders, NgModule } from '@angular/core';

import { AngularFirestoreModule } from 'angularfire2/firestore';

import * as fromShared from '../shared';

import * as fromServices from './services';

@NgModule({
    imports: [
        AngularFirestoreModule.enablePersistence()
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                ...fromServices.services,
                ...fromShared.services
            ]
        };
    }
}

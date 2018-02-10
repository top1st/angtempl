import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { catchError, map, tap } from 'rxjs/operators';

import { AngularFirestore } from 'angularfire2/firestore';

import { AuthService } from '../../../auth';

export interface Space {
    author: string
    bannerImage: string
    description: string
    id?: string
    members?: { [id: string]: boolean }
    name: string
}

@Injectable()
export class SpacesService {

    private loadingBS = new BehaviorSubject<boolean>(true);
    private errorSubject = new Subject<string>();

    constructor(
        private af: AngularFirestore,
        private auth: AuthService
    ) {}

    error$: Observable<string> = this.errorSubject.asObservable();

    loading$: Observable<boolean> = this.loadingBS.asObservable();

    spaces$: Observable<Space[]> = this.af
        .collection<Space>('spaces',
            ref => ref.where(`members.${this.auth.user.uid}`, '==', true)
        )
        .snapshotChanges()
        .pipe(
            tap(_ => this.loadingBS.next(true)),
            map(actions => actions.map(action => {
                const data = action.payload.doc.data() as Space;
                const id = action.payload.doc.id;
                return { id, ...data };
            })),
            tap(_ => this.loadingBS.next(false)),
            catchError(error => Observable.throw(this.errorSubject.next(error)))
        );

    get(id: string): Observable<Space> {
        return this.af.collection('spaces').doc<Space>(id).valueChanges();
    }

    async add(space: Space) {
        let docId = this.af.createId();
        await this.af.collection('spaces').doc(docId).set(space);
        return docId;
    }

    async update(id: string, space: Space) {
        return this.af.collection('spaces').doc(id).update(space);
    }

}

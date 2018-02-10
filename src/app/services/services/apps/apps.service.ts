import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map, switchMap, tap } from 'rxjs/operators';

import { AngularFirestore } from 'angularfire2/firestore';

export type AppType = 'rewards';

export type AppStatus = 'draft' | 'published';

export class AppDetails {
    name: string
    type: AppType
    status: AppStatus
}

export class App {
    id: string
    name: string
    type: AppType
    status: AppStatus
}

export class ProgramDetails {
    description: string
    image: string
    name: string
    type: string
}

export class Program {
    id: string
    description: string
    image: string
    name: string
    type: string
}

@Injectable()
export class AppsService {

    constructor(
        private af: AngularFirestore,
        // private uploader: UploadService
    ) {}

    apps$(spaceId: string): Observable<App[]> {
        return this.af.collection<App>(`spaces/${spaceId}/apps`).snapshotChanges().pipe(
            map(actions => actions.map(action => {
                const data = action.payload.doc.data() as App;
                const id = action.payload.doc.id;
                return { id, ...data };
            })
        ))
    }

    get(spaceId: string, appId: string): Observable<App> {
        return this.af.doc<App>(`spaces/${spaceId}/apps/${appId}`).valueChanges();
    }

    getPrograms(spaceId: string, appId: string): Observable<Program[]> {
        return this.af.collection<ProgramDetails>(`spaces/${spaceId}/apps/${appId}/programs`).snapshotChanges().pipe(
            map(actions => actions.map(action => {
                const data = action.payload.doc.data() as Program;
                const id = action.payload.doc.id;
                return { id, ...data };
            })
        ));
    }

    async add(spaceId: string, details: AppDetails) {
        let docId = this.af.createId();
        await this.af.collection(`spaces/${spaceId}/apps`).doc(docId).set(details);
        return docId;
    }

    async update(id: string, spaceId: string, app: App) {
        return this.af.collection(`spaces/${spaceId}/apps`).doc(id).update(app);
    }

    async addProgram(spaceId: string, appId: string, program: ProgramDetails) {
        let docId = this.af.createId();
        await this.af.collection(`spaces/${spaceId}/apps/${appId}/programs`).doc(docId).set(program);
        return docId;
    }

    async updateProgram(spaceId: string, appId: string, programId: string, program: ProgramDetails) {
        return this.af.collection(`spaces/${spaceId}/apps/${appId}/programs`).doc(programId).update(program);
    }

}
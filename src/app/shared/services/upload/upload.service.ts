import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AngularFirestore } from 'angularfire2/firestore';

import * as fb from 'firebase';

export interface Upload {
    $key: string
    created: Date
    file: File
    name: string
    progress: number
    url: string
}

@Injectable()
export class UploadService {

    private uploadSubject = new Subject<any>();

    upload$ = this.uploadSubject.asObservable();

    upload(path: string, file: File) {
        const ref = fb.storage().ref();
        const task = ref.child(`${path}/${file.name}`).put(file);
        console.log(path);
        task.on(fb.storage.TaskEvent.STATE_CHANGED,
            (snapshot: fb.storage.UploadTaskSnapshot) => {
                // In progress..
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log('Progress', progress);
            },
            error => {
                // Error..
            },
            () => {
                if (task.snapshot.downloadURL) {
                    const upload = {
                        url: task.snapshot.downloadURL
                    }
                    this.uploadSubject.next(upload);
                } else {
                    // Error..
                } 
            }
        )
    }

    delete(path: string, uploadKey: string) {

    }

}

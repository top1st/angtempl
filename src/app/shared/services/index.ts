import { DialogService } from './dialog/dialog.service';
import { UploadService } from './upload/upload.service';

export const services = [
    DialogService,
    UploadService
];

export * from './dialog';
export * from './upload/upload.service';



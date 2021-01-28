import { MyOtherService } from '@my-namespace/my-lib2';

export class MyService extends MyOtherService {
    someAction() {
        console.log('world!');
    }
}

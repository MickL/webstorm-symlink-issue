import { MyService } from '@my-namespace/my-lib1';

const myService = new MyService();

myService.someAction();
myService.someOtherAction(); // Error: Property 'someOtherAction' does not exist on type 'MyService'

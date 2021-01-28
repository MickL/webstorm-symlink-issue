"use strict";
exports.__esModule = true;
var my_lib1_1 = require("@my-namespace/my-lib1");
var myService = new my_lib1_1.MyService();
myService.someAction();
myService.someOtherAction(); // Error: Property 'someOtherAction' does not exist on type 'MyService'

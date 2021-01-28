### Preparation

1. `cd my-lib1`
2. `yarn link`
3. `cd ../my-lib2`
4. `yarn link`
5. `cd ../my-app`
6. `yarn link "@my-namespace/my-lib1"`
7. `yarn link "@my-namespace/my-lib2"`
8. Open folder `my-app` in Webstorm or PhpStorm


### Issue

Imports within a linked module are not resolved in the app root node_modules. Instead Webstorm searches them in the linked folder. The same errors happens when using `tsc index.ts` or using Webpack to compile.

Typescript and Webpack both added an option for this `tsc index.ts --preserveSymlinks true` 

Webstorm should have the same option.

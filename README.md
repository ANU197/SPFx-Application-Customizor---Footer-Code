## my-footer

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Building the solution

Next go to your command prompt and execute this code using below command.

```bash
gulp clean
gulp build
gulp bundle --ship
gulp package-solution --ship
```
* So you can run the above command as per the order. 
* So once you click on gulp serve, it will open a new page where you have to add your newly added web part or extensions.

### Demo 

![alt text](https://github.com/ANU197/SPFx-Application-Customizor---Footer-Code/blob/main/BlazeFooter.png?raw=true)

### SPFx – Adding Bootstrap & Font awesome 5

* Step :1


After finished creating the WebPart solution using Yo generator install the bootstrap and font awesome using the below
Font awesome is not recognised by default by the webpack, so the gulp has to recognise the font format before it loads it to the solution.
Run the below command to install the url loader

```bash
npm install jquery --save
npm install @types/jquery --save-dev
npm install bootstrap@4 --save
npm install @types/bootstrap@4 --save-dev
npm install --save @fortawesome/fontawesome-free
npm install url-loader --save-dev
```
* Step:2

Add external references to the config.json file
Locate the config.json file under the config folder and add the below entry to the file

```bash
"externals": {
"jquery": {
"path": "node_modules/jquery/dist/jquery.min.js",
"globalName": "jQuery"
},
"bootstrap": {
"path": "node_modules/bootstrap/dist/js/bootstrap.min.js",
"globalName": "bootstrap"
}
}
```
* Step 3:
* After installing add the below to the gulp.js file which is at the root folder

```bash
'use strict';
const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);
build.configureWebpack.mergeConfig({
additionalConfiguration: (generatedConfiguration) => {
generatedConfiguration.module.rules.push(
{
test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
use: {
loader: 'url-loader'
}
}
);
return generatedConfiguration;
}
});
build.initialize(gulp);
```

* Step 4:
Now add the entry into the .tsx file to reference the bootstrap CSS & JS and the font awesome CSS

```bash
import * as jQuery from "jquery";
import * as bootstrap from "bootstrap";
require('../../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../../../node_modules/@fontawesome/fontawesome-free/css/all.min.css');
```


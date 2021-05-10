## my-footer

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

Next go to your command prompt and execute this code using below command.

gulp clean
gulp build
gulp serve
gulp bundle –ship
gulp package-solution -ship
So you can run the above command as per the order. 
So once you click on gulp serve, it will open a new page where you have to add your newly added web part or extensions.

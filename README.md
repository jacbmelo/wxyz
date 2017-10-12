# WXYZ

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.
You can see this application running on [Github Pages](https://jacbmelo.github.io/wxyz/).

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Run `ng build --prod` for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run

```csh
  ng build --prod --base-href \"/wxyz/\"
  angular-cli-ghpages -d dist -b gh-pages
```

to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Add Bootstrap 4

Run in your terminal:

```sh
  npm install jquery --save
  npm install popper.js --save
  npm install bootstrap@4.0.0-beta --save
```

Open **angular-cli.json** file and add the style and scripts:

```javascript
  "styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "styles.css"
  ],
  "scripts": [
    "../node_modules/jquery/dist/jquery.slim.js",
    "../node_modules/popper.js/dist/umd/popper.min.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
  ],
```

## Adding PWA support

See [PWAs with the Angular CLI](https://medium.com/@amcdnl/service-worker-pwas-with-the-angular-cli-98a8f16d62d6).

----
Written in 2017-10-12 by [jacbmelo](https://www.github.com/jacbmelo/). Code and documentation licensed under [MIT](https://raw.githubusercontent.com/jacbmelo/wxyz/master/LICENSE.txt).

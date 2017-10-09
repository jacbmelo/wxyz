How to install Bootstrap 4 in Angular 4
=======================================

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

----
Written in 2017-10-09 with ❤ by [jacbmelo](https://www.github.com/jacbmelo/). Code and documentation licensed under [MIT](https://raw.githubusercontent.com/jacbmelo/wxyz/master/LICENSE.txt).

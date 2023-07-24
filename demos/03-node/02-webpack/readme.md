# Using Node as a Dev Tool

[npm CLI Documentation](https://docs.npmjs.com/cli-documentation/)

## Tools installation

Install sample global requirements:

```
nvm install 14.18.0
nvm use 14.18.0
npm i -g webpack@5.60.0 webpack-cli@4.9.1 gulp@4.0.2 http-server@14.0.0 
```

## Http-Server

[http-server](https://github.com/http-party/http-server)

## Gulp

[Gulp.js](https://gulpjs.com/)

Run a gulp task: 

```
gulp babel
gulp compile-sass
```

## Webpack

[Webpack](https://webpack.js.org/)

Run webpack: 

```
webpack
```
> Note: Uses `webpack.config.js` by default

## Auditing Security Issues

[npm audit](https://docs.npmjs.com/cli/audit.html)

![audit](_images/npm-audit.png)

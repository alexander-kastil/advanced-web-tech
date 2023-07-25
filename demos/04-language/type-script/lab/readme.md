# Lab: Table Helper

Create a table helper that can be used to create HTML tables by given array of items and list of properties to be rendered as columns.

Example usage:

```typescript
import { TableHelper } from "./table-helper";

window.addEventListener('load', function () {
  var div: HTMLElement = document.querySelector("#table");
  var th = new TableHelper();
  th.attachTable(div, ["Text", "Amount", "Date"]);
})
```

Use the following webpack config and package.json files:

webpack.config.js:

```javascript
const path = require("path");

module.exports = {
  entry: [path.join(__dirname, "/src/index.ts")],
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    library: "ts",
    libraryTarget: "umd",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  mode: "development"
};
```

package.json:

```json
"devDependencies": {
    "@types/node": "~8.9.4",
    "autoprefixer": "^9.3.1",
    "clean-webpack-plugin": "^0.1.19",
    "css-loader": "^1.0.0",
    "extract-loader": "^3.0.0",
    "file-loader": "^2.0.0",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.4.0",
    "node-sass": "^9.0.0",
    "postcss-loader": "^3.0.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "ts-loader": "^5.2.2",
    "typescript": "^3.1.3",
    "webpack": "^5.88.2",
    "webpack-cli": "^5.1.4"
  }
```

Use the following json:

```json
[
  {
    "ID": 1,
    "Date": "01.01.2016",
    "Amount": 100,
    "Text": "Schreibwaren",
    "Paid": false
  },
  {
    "ID": 2,
    "Date": "02.01.2016",
    "Amount": 56,
    "Text": "Diesel",
    "Paid": false
  },
  {
    "ID": 3,
    "Date": "02.01.2016",
    "Amount": 1267,
    "Text": "Laptop",
    "Paid": true
  }
]
```
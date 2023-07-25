import { TableHelper } from "./table-helper";

window.addEventListener('load', function () {
  var div: HTMLElement = document.querySelector("#table");
  var th = new TableHelper();
  th.attachTable(div);
})
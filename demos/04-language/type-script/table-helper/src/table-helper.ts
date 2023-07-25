import { Voucher } from "./model";

export class TableHelper {
  attachTable(parentDiv: HTMLElement, cols: string[] = ["Text", "Amount", "Date"]) {
    var tbody = "";
    fetch("vouchers.json").then((resp) => {
      resp.json().then((data: Voucher[]) => {
        data.forEach((v: Voucher) => {
          tbody += `<tr >`;
          cols.forEach((c) => {
            tbody += `<td>${v[c]}</td>`;
          });
          tbody += `</tr>`;
        });
        parentDiv.innerHTML = `<table><tr><th>Text</th></tr>${tbody}</table>`;
      });
    });
  }
}

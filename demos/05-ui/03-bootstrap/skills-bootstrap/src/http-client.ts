import { Observable, from } from "rxjs";

export class HttpClient {

  get<T>(url: string): Observable<T> {
    let data = new Promise<T>((resolve, reject) => {
      fetch(url)
        .then(resp => {
          console.log("response from mock httpclient:", resp);
          resolve(resp.json());
        })
        .catch(err => {
          console.log("error calling service");
          console.log(err);
          return reject(err);
        });
    });
    return from(data);
  }
}

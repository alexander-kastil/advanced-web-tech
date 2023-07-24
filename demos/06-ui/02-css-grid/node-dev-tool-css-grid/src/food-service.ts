import axios from 'axios';

export class FoodService {
    constructor(private url: string) { }

    log(parm: string) {
        console.log('log: ' + parm);
    }

    async getFoodFetch() {
        return fetch(this.url).then((resp) => resp.json());
    }

    async getFood() {
        return axios.get(this.url);
    }

    async addFood(item) {
        return axios.post(this.url, item);
    }
}

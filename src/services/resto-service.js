export default class RestoServise {
    constructor() {
        this._url = 'http://localhost:3000/flowers';
    }

    getListItems= async () => {
        const res = await fetch(this._url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._url}, received ${res.status}`);
        }

        const result = await res.json();
        return result;
    }
    
}


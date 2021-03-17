export default class PortfolioService {

    constructor(props) {
        this._apiBase = 'https://yesha-portfolio.firebaseio.com/'
    }


    getResource= async (url) => {
        const res = await fetch(`${this._apiBase}${url}.json`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();

    }

    getCatalog = async () => {
        return await this.getResource('/catalog');
    }

}

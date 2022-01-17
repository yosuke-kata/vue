import RestClient from "./RestClient";

export default class WeatherScreenClient extends RestClient {

    // override
    get defaultHeaders () {
        return {}
    }

    // constructor (axios, baseUrl) {
    //     super(axios, baseUrl);
    // }

    /** @param {string} cityCode */
    fetchWeather(cityCode) {
        return this.$get(`city/${cityCode}`)
    }
}
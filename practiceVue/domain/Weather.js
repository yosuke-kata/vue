/** @typedef {import("./WeatherStructure").default} WeatherStructure */

export default class Weather {
    /**
     * @param {WeatherStructure} obj
     */
    constructor(obj) {
        this.today    = obj.today;
        this.tomorrow = obj.tomorrow;
        this.region   = obj.region;
    }
}
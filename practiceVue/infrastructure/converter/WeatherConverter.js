/** @typedef {import("../rest-client/dto/WeatherDto").default} WeatherDto */

import Weather from "../../domain/Weather";
import ObjectConverter from "./ObjectConverter";


/**
 * @extends {ObjectConverter<Weather,WeatherDto>}
 */
export default class WeatherConverter extends ObjectConverter {
    /**
     * @param {WeatherDto} externalObj
     */
    fromExternal(externalObj) {
        return new Weather ({
            today    : externalObj.forecasts[0].telop,
            tomorrow : externalObj.forecasts[0].telop,
            region   : externalObj.title,
        })
    }
}

export const WEATHER_CONVERTER = new WeatherConverter();
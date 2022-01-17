// import { getWeatherUrl }       from "@/plugins/env"; 
import WeatherScreenClient from "@/infrastructure/rest-client/weatherScreenClient";

const getWeatherUrl = "https://weather.tsukumijima.net/api/forecast"
export default function (context) {
    const axios = context.$axios;
    const store = context.store;

    // ログイン済みかチェック
    // if (locationStorage.getItems('Idem.GEAR_SESSION')) {    }

        // Restクライアントを生成、ストアに格納
        const weatherClient = new WeatherScreenClient(axios, getWeatherUrl); // env import したら getWeatherUrl()
        store.dispatch('commonStore/setWeatherClient', weatherClient);
}

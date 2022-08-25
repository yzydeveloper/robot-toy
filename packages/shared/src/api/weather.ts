import { WEATHER_BASE_URL } from '../constants'
import { fetchClient } from '../http'

export class WeatherApi {
    static getWeather(city: string) {
        return fetchClient.get(WEATHER_BASE_URL, {
            params: {
                city
            }
        })
    }
}

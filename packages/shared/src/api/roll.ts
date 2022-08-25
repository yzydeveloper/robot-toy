import type { WeatherModel } from '../types'
import { RollApiAbstract } from './roll.abstract'
import { fetchClient } from '../http'
import { ROLL_BASE_URL, ROLL_APP_ID, ROLL_APP_SECRET } from '../constants'

const defaultParams = {
    app_id: ROLL_APP_ID,
    app_secret: ROLL_APP_SECRET
}

class Api extends RollApiAbstract {
    getWeather(city: string) {
        return fetchClient.get<WeatherModel>(`${ROLL_BASE_URL}/weather/current/${city}`, {
            params: defaultParams
        })
    }

    getHoliday(params: {
        date: string
        ignoreHoliday?: boolean
    }): Promise<void> {
        return fetchClient.get(`${ROLL_BASE_URL}/holiday/single/${params.date}`, {
            params: {
                ...defaultParams,
                ignoreHoliday: params.ignoreHoliday
            }
        })
    }
}

export const RollApi = new Api()

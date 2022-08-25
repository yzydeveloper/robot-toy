import type { LunarModel, WeatherModel } from '../types'
import { TianApiAbstract } from './tian.abstract'
import { tianFetchClient } from '../http'

export class Api extends TianApiAbstract {
    getWeather(city: string) {
        return tianFetchClient.get<WeatherModel[]>('/tianqi/index', {
            params: {
                city
            }
        })
    }

    getLunar(date: string) {
        return tianFetchClient.get<LunarModel[]>('/lunar/index', {
            params: {
                date
            }
        })
    }
}

export const TianApi = new Api()

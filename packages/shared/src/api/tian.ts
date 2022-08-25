import type { WeatherParams, WeatherModel } from '../types'
import { TianApiAbstract } from './tian.abstract'
import { tianFetchClient } from '../http'

export class Api extends TianApiAbstract {
    getWeather(params: WeatherParams) {
        return tianFetchClient.get<WeatherModel>('/tianqi/index', {
            params
        })
    }

    getLunar(params: any) {
        return tianFetchClient.get('/lunar/index', {
            params
        })
    }
}

export const TianApi = new Api()

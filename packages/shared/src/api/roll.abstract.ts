import type { WeatherModel } from '../types'

export abstract class RollApiAbstract {
    abstract getWeather(city: string): Promise<WeatherModel>

    abstract getHoliday(params: any): Promise<void>
}

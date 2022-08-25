import { RollApi } from '../api/roll'

export class RollService {
    static getWeather(city: string) {
        return RollApi.getWeather(city)
    }
}

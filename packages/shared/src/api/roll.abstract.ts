export abstract class RollApiAbstract {
    abstract getWeather(city: string): Promise<void>

    abstract getHoliday(params: any): Promise<void>
}

export abstract class TianApiAbstract {
    abstract getWeather(params: any): Promise<any>

    abstract getLunar(params: any): Promise<any>
}

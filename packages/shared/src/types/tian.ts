export interface WeatherModel {
    // YYYY-MM-DD
    date: string
    // 星期六
    week: string
    // 蚌埠
    area: string
    // 晴
    weather: string
    // 西南风
    wind: string
    // 3-4级
    windsc: string
    // 湿度
    humidity: string
    // 降雨量
    pcpn: string
    // 降雨概率
    pop: string
    // 当前温度
    real: string
    // 最高温度
    highest: string
    // 最低温度
    lowest: string
    // 生活指数提示
    tips: string
}

export interface LunarModel {
    lubarmonth: string
    lunarday: string
}

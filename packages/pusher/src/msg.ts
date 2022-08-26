import type { WecomSendMessageBody, DingtalkBatchSendOtomsgBody } from '@robot-toy/shared'

import { TianApi } from '@robot-toy/shared'

type TextCardMsgModel = Pick<WecomSendMessageBody, 'textcard' | 'msgtype'>

interface TextCardMsgParams {
    city: string
    knowTime: string
}

type MarkdownMsgModel = Pick<DingtalkBatchSendOtomsgBody, 'msgKey' | 'msgParam'>

interface MarkdownMsgParams extends TextCardMsgParams { }

export async function getTextCardMsg(params: TextCardMsgParams): Promise<TextCardMsgModel> {
    const [{ weather, area, date, wind, windsc, lowest, highest, humidity, tips }] = await TianApi.getWeather(params.city)
    const [{ lubarmonth, lunarday }] = await TianApi.getLunar(date)
    const diffTimestamp = new Date(date).valueOf() - new Date(params.knowTime).valueOf()
    const day = Math.floor(diffTimestamp / (1000 * 3600 * 24))

    const title = `这是我们相识的第${day}天`
    const description = []
    const city = area
    const today = `${date.replace('-', '年').replace('-', '月')}日`
    const week = `星期${'日一二三四五六'.charAt(new Date(date).getDay())}`

    description.push(`${city} | ${today} | ${week}`)
    description.push(`农历 | ${lubarmonth}${lunarday}`)
    description.push('')
    description.push('今天的天气状况：')
    description.push(`天气：${weather}`)
    description.push(`${wind}：${windsc}`)
    description.push(`最低气温：${lowest}`)
    description.push(`最高气温：${highest}`)
    description.push(`湿度：${humidity}`)
    description.push('')
    description.push(`${tips}`)
    return {
        msgtype: 'textcard',
        textcard: {
            title,
            description: description.join('\n'),
            url: 'https://github.com/yzydeveloper/robot-toy'
        }
    }
}

export async function getMarkdownMsg(params: MarkdownMsgParams): Promise<MarkdownMsgModel> {
    const [{ weather, area, date, wind, windsc, lowest, highest, humidity, tips }] = await TianApi.getWeather(params.city)
    const [{ lubarmonth, lunarday }] = await TianApi.getLunar(date)
    const diffTimestamp = new Date(date).valueOf() - new Date(params.knowTime).valueOf()
    const day = Math.floor(diffTimestamp / (1000 * 3600 * 24))

    const title = `# 这是我们相识的第${day}天`
    const description = [
        title
    ]
    const city = area
    const today = `${date.replace('-', '年').replace('-', '月')}日`
    const week = `星期${'日一二三四五六'.charAt(new Date(date).getDay())}`

    description.push(`${city} | ${today} | ${week}`)
    description.push(`农历 | ${lubarmonth}${lunarday}`)
    description.push('')
    description.push('今天的天气状况：')
    description.push(`天气：${weather}`)
    description.push(`${wind}：${windsc}`)
    description.push(`最低气温：${lowest}`)
    description.push(`最高气温：${highest}`)
    description.push(`湿度：${humidity}`)
    description.push('')
    description.push(`${tips}`)
    return {
        msgKey: 'sampleMarkdown',
        msgParam: JSON.stringify({
            title: '你老公来咯',
            text: description.join('\n\n')
        })
    }
}

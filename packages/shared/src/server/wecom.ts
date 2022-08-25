import type { WecomTokenModel, WecomSendMessageBody, WecomTokenParams } from '../types'
import { WecomApi } from '../api/wecom'

export class WecomServer {
    private static token: WecomTokenModel['access_token']

    static getToken(params: WecomTokenParams) {
        return WecomApi.getToken(params).then(res => {
            this.token = res.access_token
            return res
        })
    }

    static sendMessage(body: WecomSendMessageBody) {
        return WecomApi.sendMessage(body, this.token)
    }
}

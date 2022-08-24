import type { TokenModel } from '../api/dingtalk'
import type { SendMessageBody, TokenParams } from '../api/wecom'
import { WecomkApi } from '../api/wecom'

export class WecomServer {
    private static token: TokenModel['access_token']

    static getToken(params: TokenParams) {
        return WecomkApi.getToken(params).then(res => {
            this.token = res.access_token
            return res
        })
    }

    static sendMessage(body:SendMessageBody) {
        return WecomkApi.sendMessage(body, this.token)
    }
}

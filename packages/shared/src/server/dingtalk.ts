import type { TokenParams, TokenModel, BatchSendOtomsgBody } from '../api/dingtalk'
import { DingtalkApi } from '../api/dingtalk'

export class DingtalkServer {
    private static token: TokenModel['access_token']

    static getToken(params: TokenParams) {
        return DingtalkApi.getToken(params).then(res => {
            this.token = res.access_token
            return res
        })
    }

    static batchSendOtomsg(body: BatchSendOtomsgBody) {
        return DingtalkApi.batchSendOtomsg(body, this.token)
    }
}

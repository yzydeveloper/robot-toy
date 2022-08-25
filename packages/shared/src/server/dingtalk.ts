import type { DingtalkTokenParams, DingtalkTokenModel, DingtalkBatchSendOtomsgBody } from '../types'
import { DingtalkApi } from '../api/dingtalk'

export class DingtalkServer {
    private static token: DingtalkTokenModel['access_token']

    static getToken(params: DingtalkTokenParams) {
        return DingtalkApi.getToken(params).then(res => {
            this.token = res.access_token
            return res
        })
    }

    static batchSendOtomsg(body: DingtalkBatchSendOtomsgBody) {
        return DingtalkApi.batchSendOtomsg(body, this.token)
    }
}

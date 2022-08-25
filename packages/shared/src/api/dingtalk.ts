import type { DingtalkBatchSendOtomsgBody, DingtalkBatchSendOtomsgModel } from '../types'
import { DingtalkApiAbstract } from './dingtalk.abstract'
import { DINGTALK_BASE_URL } from '../constants'
import { dingtalkFetchClient } from '../http'

class Api extends DingtalkApiAbstract {
    batchSendOtomsg(body: DingtalkBatchSendOtomsgBody) {
        return dingtalkFetchClient.post<DingtalkBatchSendOtomsgModel>(`${DINGTALK_BASE_URL}/v1.0/robot/oToMessages/batchSend`, {
            body
        })
    }
}

export const DingtalkApi = new Api()

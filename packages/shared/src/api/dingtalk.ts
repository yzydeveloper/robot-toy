import type { DingtalkTokenParams, DingtalkTokenModel, DingtalkBatchSendOtomsgBody, DingtalkBatchSendOtomsgModel } from '../types'
import type { DingtalkApiAbstract } from './dingtalk.abstract'
import { DINGTALK_BASE_URL } from '../constants'
import { fetchClient } from '../http'

class Api implements DingtalkApiAbstract {
    getToken(params: DingtalkTokenParams) {
        return fetchClient.get<DingtalkTokenModel>(`${DINGTALK_BASE_URL}/gettoken`, { params })
    }

    batchSendOtomsg(body: DingtalkBatchSendOtomsgBody, token: DingtalkTokenModel['access_token']) {
        return fetchClient.post<DingtalkBatchSendOtomsgModel>(`${DINGTALK_BASE_URL}/v1.0/robot/oToMessages/batchSend`, {
            body,
            headers: {
                'x-acs-dingtalk-access-token': token
            }
        })
    }
}

export const DingtalkApi = new Api()

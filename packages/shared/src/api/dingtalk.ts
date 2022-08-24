import { DINGTALK_BASE_URL } from '../constants'
import { fetchClient } from '../http'

export interface TokenParams {
    appkey: string
    appsecret: string
}

export interface TokenModel {
    errcode: number
    access_token: string
    errmsg: string
    expires_in: number
}

export interface BatchSendOtomsgBody {
    robotCode: string
    userIds: string[]
    msgKey: string
    msgParam: string
}

export interface BatchSendOtomsgModel {
    processQueryKey: string
    invalidStaffIdList: string[]
    flowControlledStaffIdList: string[]
}

export class DingtalkApi {
    static getToken(params: TokenParams) {
        return fetchClient.get<TokenModel>(`${DINGTALK_BASE_URL}/gettoken`, { params })
    }

    static batchSendOtomsg(body: BatchSendOtomsgBody, token: TokenModel['access_token']) {
        return fetchClient.post<BatchSendOtomsgModel>(`${DINGTALK_BASE_URL}/v1.0/robot/oToMessages/batchSend`, {
            body,
            headers: {
                'x-acs-dingtalk-access-token': token
            }
        })
    }
}

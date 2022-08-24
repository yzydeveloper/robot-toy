import type { TokenModel } from './dingtalk'
import { WECOM_BASE_URL } from '../constants'
import { fetchClient } from '../http'

export interface TokenParams {
    corpid: string
    corpsecret: string
}

export enum MsgTypeEnum {
    text = 'text',
    image = 'image',
    textcard = 'textcard'
}
export type MsgType = keyof typeof MsgTypeEnum

export type SendMessageBody = {
    [key in MsgType]: any
} & {
    touser: string
    toparty?: string
    totag?: string
    msgtype: MsgType
    agentid: number; safe?: number
    enable_id_trans?: number
    enable_duplicate_check?: number
}

export class WecomkApi {
    static getToken(params: TokenParams) {
        return fetchClient.get<TokenModel>(`${WECOM_BASE_URL}/cgi-bin/gettoken`, { params })
    }

    static sendMessage(body: SendMessageBody, token: TokenModel['access_token']) {
        return fetchClient.post(`${WECOM_BASE_URL}/cgi-bin/message/send`, {
            body,
            params: {
                assess_token: token
            }
        })
    }
}

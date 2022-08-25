import type { WecomTokenParams, WecomTokenModel, WecomSendMessageBody } from '../types'
import type { WecomApiAbstract } from './wecom.abstract'
import { WECOM_BASE_URL } from '../constants'
import { fetchClient } from '../http'

class Api implements WecomApiAbstract {
    getToken(params: WecomTokenParams): Promise<WecomTokenModel> {
        return fetchClient.get<WecomTokenModel>(`${WECOM_BASE_URL}/cgi-bin/gettoken`, { params })
    }

    sendMessage(body: WecomSendMessageBody, token: string): Promise<any> {
        return fetchClient.post(`${WECOM_BASE_URL}/cgi-bin/message/send`, {
            body,
            params: {
                assess_token: token
            }
        })
    }
}

export const WecomApi = new Api()

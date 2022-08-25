import type { WecomSendMessageBody } from '../types'
import { WecomApiAbstract } from './wecom.abstract'
import { WECOM_BASE_URL } from '../constants'
import { wecomFetchClient } from '../http'

class Api extends WecomApiAbstract {
    sendMessage(body: WecomSendMessageBody): Promise<any> {
        return wecomFetchClient.post(`${WECOM_BASE_URL}/cgi-bin/message/send`, {
            body
        })
    }
}

export const WecomApi = new Api()

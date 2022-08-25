import { WecomTokenParams, WecomTokenModel, WecomSendMessageBody } from '../types'

export abstract class WecomApiAbstract {
    abstract getToken(params: WecomTokenParams): Promise<WecomTokenModel>

    abstract sendMessage(body: WecomSendMessageBody, token:WecomTokenModel['access_token']): Promise<any>
}

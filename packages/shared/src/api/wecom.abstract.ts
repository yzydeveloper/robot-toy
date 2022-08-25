import { WecomTokenModel, WecomSendMessageBody } from '../types'

export abstract class WecomApiAbstract {
    abstract sendMessage(body: WecomSendMessageBody, token:WecomTokenModel['access_token']): Promise<any>
}

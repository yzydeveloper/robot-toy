import type { DingtalkTokenParams, DingtalkTokenModel, DingtalkBatchSendOtomsgBody, DingtalkBatchSendOtomsgModel } from '../types'

export abstract class DingtalkApiAbstract {
    abstract getToken(params: DingtalkTokenParams): Promise<DingtalkTokenModel>

    abstract batchSendOtomsg(body: DingtalkBatchSendOtomsgBody, token: DingtalkTokenModel['access_token']): Promise<DingtalkBatchSendOtomsgModel>
}

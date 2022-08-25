import type { DingtalkTokenModel, DingtalkBatchSendOtomsgBody, DingtalkBatchSendOtomsgModel } from '../types'

export abstract class DingtalkApiAbstract {
    abstract batchSendOtomsg(body: DingtalkBatchSendOtomsgBody, token: DingtalkTokenModel['access_token']): Promise<DingtalkBatchSendOtomsgModel>
}

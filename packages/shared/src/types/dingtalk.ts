export interface DingtalkTokenParams {
    appkey: string
    appsecret: string
}

export interface DingtalkTokenModel {
    errcode: number
    access_token: string
    errmsg: string
    expires_in: number
}

export enum DingtalkMsgTypeEnum {
    sampleText = 'sampleText',
    sampleMarkdown = 'sampleMarkdown'
}
export type DingtalkMsgType = keyof typeof DingtalkMsgTypeEnum

export interface DingtalkBatchSendOtomsgBody {
    robotCode: string
    userIds: string[]
    msgKey: DingtalkMsgType
    msgParam: string
}

export interface DingtalkBatchSendOtomsgModel {
    processQueryKey: string
    invalidStaffIdList: string[]
    flowControlledStaffIdList: string[]
}

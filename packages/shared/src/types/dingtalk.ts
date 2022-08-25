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

export interface DingtalkBatchSendOtomsgBody {
    robotCode: string
    userIds: string[]
    msgKey: string
    msgParam: string
}

export interface DingtalkBatchSendOtomsgModel {
    processQueryKey: string
    invalidStaffIdList: string[]
    flowControlledStaffIdList: string[]
}

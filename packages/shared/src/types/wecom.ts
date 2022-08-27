export interface WecomTokenModel {
    errcode: number
    access_token: string
    errmsg: string
    expires_in: number
}

export interface WecomTokenParams {
    corpid: string
    corpsecret: string
}

export enum WecomMsgTypeEnum {
    text = 'text',
    image = 'image',
    textcard = 'textcard',
    markdown = 'markdown'
}
export type WecomMsgType = keyof typeof WecomMsgTypeEnum

export type WecomSendMessageBody = {
    [key in WecomMsgType]?: any
} & {
    touser: string
    toparty?: string
    totag?: string
    msgtype: WecomMsgType
    agentid: number | string;
    safe?: number
    enable_id_trans?: number
    enable_duplicate_check?: number
}

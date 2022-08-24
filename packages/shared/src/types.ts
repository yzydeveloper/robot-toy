export enum RobotTypeEnum {
    Dingtalk = 'Dingtalk',
    Wecom = 'Wecom',
    Wechat = 'Wechat'
}

export type RobotType = keyof typeof RobotTypeEnum

export enum MessageTypeEnum {
    Text = 'Text',
    Markdown = 'Markdown',
    Image = 'Image'
    // ...
}

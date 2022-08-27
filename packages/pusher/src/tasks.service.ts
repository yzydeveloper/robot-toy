import { Injectable, Logger } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'
import { DingtalkApi, WecomApi } from 'packages/shared/dist'
import { getMarkdownMsg, getTextCardMsg } from './msg'

@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name)

    @Cron('0 30 7 * * *')
    handleMorning() {
        const { WECOM_APP_ID, DINGTALK_ROBOT_APP_ID, DINGTALK_USERIDS, CITY, TIME_OF_KNOWING } = process.env

        getTextCardMsg({
            city: CITY,
            timeOfKnowing: TIME_OF_KNOWING
        }).then(async params => {
            WecomApi.sendMessage({
                touser: '@all',
                agentid: parseInt(WECOM_APP_ID, 10),
                ...params
            })
        })
        getMarkdownMsg({
            city: CITY,
            timeOfKnowing: TIME_OF_KNOWING
        }).then(async params => {
            DingtalkApi.batchSendOtomsg({
                robotCode: DINGTALK_ROBOT_APP_ID,
                userIds: DINGTALK_USERIDS as unknown as string[],
                ...params
            })
        })
        this.logger.debug('Good morning')
    }

    @Cron('0 30 11 * * *')
    handleNoon() {
        this.logger.debug('Good afternoon')
    }
}

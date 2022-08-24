import { Injectable, Logger } from '@nestjs/common'
import { Cron, Interval } from '@nestjs/schedule'

@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name)

    @Interval(1000)
    handleTest() {
        this.logger.debug('Test>>>Test')
    }

    @Cron('0 30 7 * * *')
    handleMorning() {
        this.logger.debug('Good morning')
    }

    @Cron('* 30 11 * * *')
    handleNoon() {
        this.logger.debug('Good afternoon')
    }
}

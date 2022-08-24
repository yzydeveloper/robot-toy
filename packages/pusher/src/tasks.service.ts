import { Injectable, Logger } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'

@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name)

    @Cron('0 30 7 * * *')
    handleMorning() {
        this.logger.debug('Good morning')
    }

    @Cron('* 30 11 * * *')
    handleNoon() {
        this.logger.debug('Good afternoon')
    }
}

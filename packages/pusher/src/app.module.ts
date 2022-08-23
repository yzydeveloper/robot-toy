import { Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { TasksModule } from './tasks.module'

@Module({
    imports: [ScheduleModule.forRoot(), TasksModule],
})
export class AppModule {}

import { Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { ConfigModule } from '@nestjs/config'
import { TasksModule } from './tasks.module'

@Module({
    imports: [ConfigModule.forRoot(), ScheduleModule.forRoot(), TasksModule],
})
export class AppModule {}

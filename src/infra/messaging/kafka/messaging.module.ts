import { DatabaseModule } from './../../database/database.module';
import { SendNotification } from 'src/core/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.conroller';
import { Module } from '@nestjs/common';

import { KafkaConsumerService } from './kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}

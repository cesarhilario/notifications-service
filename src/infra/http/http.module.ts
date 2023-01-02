import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { SendNotification } from '@core/use-cases/send-notification';
import { ReadNotification } from '@core/use-cases/read-notification';
import { UnreadNotification } from '@core/use-cases/unread-notification';
import { GetRecipientNotifications } from '@core/use-cases/get-recipient-notifications';
import { CountRecipientNotifications } from '@core/use-cases/count-recipient-notifications';
import { CancelNotification } from '@core/use-cases/cancel-notification';

import { NotificationsController } from './controllers/notifications.controller';
import { NotificationRepository } from '@core/repositories/notification-repository';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    {
      provide: DatabaseModule,
      useClass: DatabaseModule,
    },
    {
      provide: SendNotification,
      useFactory: (notificationRepository: NotificationRepository) => {
        return new SendNotification(notificationRepository);
      },
      inject: [NotificationRepository],
    },
    {
      provide: CancelNotification,
      useFactory: (notificationRepository: NotificationRepository) => {
        return new CancelNotification(notificationRepository);
      },
      inject: [NotificationRepository],
    },
    {
      provide: CountRecipientNotifications,
      useFactory: (notificationRepository: NotificationRepository) => {
        return new CountRecipientNotifications(notificationRepository);
      },
      inject: [NotificationRepository],
    },
    {
      provide: GetRecipientNotifications,
      useFactory: (notificationRepository: NotificationRepository) => {
        return new GetRecipientNotifications(notificationRepository);
      },
      inject: [NotificationRepository],
    },
    {
      provide: ReadNotification,
      useFactory: (notificationRepository: NotificationRepository) => {
        return new ReadNotification(notificationRepository);
      },
      inject: [NotificationRepository],
    },
    {
      provide: UnreadNotification,
      useFactory: (notificationRepository: NotificationRepository) => {
        return new UnreadNotification(notificationRepository);
      },
      inject: [NotificationRepository],
    },
  ],
})
export class HttpModule {}

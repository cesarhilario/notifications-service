import { Content } from 'src/core/entities/content';
import {
  Notification,
  NotificationProps,
} from 'src/core/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade'),
    recipientId: 'recipient-1',
    ...override,
  });
}

import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to sendo a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'this is a notification',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});

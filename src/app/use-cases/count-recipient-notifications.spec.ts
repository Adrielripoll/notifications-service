import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository'
import { CountRecipientNotifications } from './count-recipient-notifications'
import { makeNotification } from '@test/factories/notification-factory'

describe('Count notification', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository()
        const cancelRecipientNotifications = new CountRecipientNotifications(notificationsRepository)       

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1'}))

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1'}))

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-2'}))

        const notifications = await cancelRecipientNotifications.execute({ recipientId: 'recipient-1' })

        expect(notifications).toBeGreaterThan(0)
    })
})
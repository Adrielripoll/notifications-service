import { Notification as RawNotification} from '@prisma/client'
import { Notification } from '@app/entities/notification'
import { Content } from '@app/entities/content'

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification){
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.Value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt
        }
    }   

    static toDomain(raw: RawNotification): Notification{
        return new Notification({
            category: raw.category,
            content: new Content(raw.content),
            recipientId: raw.recipientId,
            readAt: raw.readAt,
            canceledAt: raw.canceledAt,
            createdAt: raw.createdAt
            recipientEmail: raw.recipientEmail
        }, raw.id,)
    }
    
}
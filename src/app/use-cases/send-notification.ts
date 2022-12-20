import { Notification } from "../entities/notification"
import { Content } from "../entities/content"
import { NotificationsRepository } from "../repositories/notifications-repository"
import { Injectable } from "@nestjs/common"

interface SendNotificationRequest {
    recipientId: string
    content: string
    category: string
}

@Injectable()
export class SendNotification {

    constructor(private readonly notificationsRepository: NotificationsRepository){}

    async execute(request: SendNotificationRequest): Promise<Notification>{
        const { category, content, recipientId } = request

        const notification = new Notification({
            recipientId,
            category,
            content: new Content(content)
        })

        await this.notificationsRepository.create(notification)

        return notification
    }
}
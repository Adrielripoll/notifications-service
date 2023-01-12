import { Notification } from "../entities/notification"
import { Content } from "../entities/content"
import { NotificationsRepository } from "../repositories/notifications-repository"
import { Injectable } from "@nestjs/common"
import { SendEmail } from '@infra/mail/aws/services/sendEmail.service'

interface SendNotificationRequest {
    recipientId: string
    content: string
    recipientEmail: string
    category: string
}

@Injectable()
export class SendNotification {

    constructor(
        private readonly notificationsRepository: NotificationsRepository,
        private readonly sendEmail: SendEmail
    ){}

    async execute(request: SendNotificationRequest): Promise<Notification>{
        const { category, content, recipientId, recipientEmail } = request

        const notification = new Notification({
            recipientId,
            category,
            recipientEmail,
            content: new Content(content)
        })

        await this.notificationsRepository.create(notification)
        this.sendEmail.execute(recipientEmail)

        return notification
    }
}
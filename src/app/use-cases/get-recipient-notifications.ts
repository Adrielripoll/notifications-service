import { NotificationsRepository } from "../repositories/notifications-repository"
import { Injectable } from "@nestjs/common"
import { NotificationNotFound } from "./errors/notification-not-found"
import { Notification } from "@app/entities/notification"

interface GetRecipientNotificationsRequest {
    recipientId: string
}

type GetRecipientNotificationsResponse = Notification[]

@Injectable()
export class GetRecipientNotifications {

    constructor(private readonly notificationsRepository: NotificationsRepository){}

    async execute(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse>{
        const { recipientId } = request

        const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId)

        return notifications
    }
}
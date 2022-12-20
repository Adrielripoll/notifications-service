import { NotificationsRepository } from "../repositories/notifications-repository"
import { Injectable } from "@nestjs/common"
import { NotificationNotFound } from "./errors/notification-not-found"

interface CountRecipientNotificationsRequest {
    recipientId: string
}

type CountRecipientNotificationsResponse = number

@Injectable()
export class CountRecipientNotifications {

    constructor(private readonly notificationsRepository: NotificationsRepository){}

    async execute(request: CountRecipientNotificationsRequest): Promise<CountRecipientNotificationsResponse>{
        const { recipientId } = request

        const count = await this.notificationsRepository.countManyByRecipientId(recipientId)

        return count 
    }
}
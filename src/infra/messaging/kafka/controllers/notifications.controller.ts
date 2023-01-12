import { SendNotification } from "@app/use-cases/send-notification";
import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from '@nestjs/microservices'


interface SendNotificationPayload {
    content: string,
    category: string,
    recipientId: string,
    recipientEmail: string
}

@Controller()
export class NotificationsController {

    constructor(private readonly sendNotification: SendNotification){}
    
    @EventPattern('notifications.send-notification')
    async handleSendNotification(@Payload() content: SendNotificationPayload){
        await this.sendNotification.execute(content)
    }
}
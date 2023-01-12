import { Controller, Post, Patch, Param, Get } from '@nestjs/common'
import { Body } from '@nestjs/common/decorators';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { createNotificationDto } from '../dtos/create-notification-dto';
import { NotificationViewModel } from '../view-model/notification-view-model';
import { CancelNotification } from '@app/use-cases/cancel-notification';
import { UnreadNotification } from '@app/use-cases/unread-notification';
import { ReadNotification } from '@app/use-cases/read-notification';
import { CountRecipientNotifications } from '@app/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@app/use-cases/get-recipient-notifications';

@Controller('notifications')
export class NotificationsController {

    constructor(
        private readonly sendNotification: SendNotification,
        private readonly cancelNotification: CancelNotification,
        private readonly readNotification: ReadNotification,
        private readonly unreadNotification: UnreadNotification,
        private readonly countRecipientNotifications: CountRecipientNotifications,
        private readonly getRecipientNotifications: GetRecipientNotifications
    ){}

    @Post()
    async create(@Body() body: createNotificationDto){
        const { recipientId, content, category, recipientEmail } = body
        
        const notification = await this.sendNotification.execute({
            recipientId,
            content,
            category,
            recipientEmail
        })

        return NotificationViewModel.toHTTP(notification)
    }

    @Patch(':id/cancel')
    async cancel(@Param('id') id: string){
        await this.cancelNotification.execute({ notificationId: id })
    }
    
    @Get('count/from/:recipientId')
    async countFromRecipient(@Param('recipientId') recipientId: string){
        const count = await this.countRecipientNotifications.execute({ recipientId })
        return count
    }
    
    @Get('from/:recipientId')
    async getFromRecipient(@Param('recipientId') recipientId: string){
        const notifications = await this.getRecipientNotifications.execute({ recipientId })
        return notifications.map(NotificationViewModel.toHTTP)
    }
    
    @Patch(':id/read')
    async read(@Param('id') id: string){
        await this.readNotification.execute({ notificationId: id })
    }
    
    @Patch(':id/unread')
    async unread(@Param('id') id: string){
        await this.unreadNotification.execute({ notificationId: id })
    }
}
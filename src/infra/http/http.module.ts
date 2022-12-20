import { Module } from "@nestjs/common/decorators";
import { SendNotification } from "src/app/use-cases/send-notification";
import { DatabaseModule } from "../database/database.module";
import { NotificationsController } from "./controllers/notification.controller";
import { CancelNotification } from "@app/use-cases/cancel-notification";
import { CountRecipientNotifications } from "@app/use-cases/count-recipient-notifications";
import { GetRecipientNotifications } from "@app/use-cases/get-recipient-notifications";
import { ReadNotification } from "@app/use-cases/read-notification";
import { UnreadNotification } from "@app/use-cases/unread-notification";

@Module({
    imports: [DatabaseModule],
    controllers: [
        NotificationsController
    ],
    providers: [
        SendNotification, 
        CancelNotification, 
        CountRecipientNotifications, 
        GetRecipientNotifications, 
        ReadNotification, 
        UnreadNotification
    ]
})
export class HttpModule {}
import { Module } from "@nestjs/common/decorators";
import { NotificationsRepository } from "src/app/repositories/notifications-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationRepository } from "./prisma/repositories/prisma-notification-repository";

@Module({
    providers: [PrismaService, {
        provide: NotificationsRepository,
        useClass: PrismaNotificationRepository
    }],
    exports: [NotificationsRepository]
})
export class DatabaseModule {}
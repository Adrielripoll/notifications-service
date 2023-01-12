import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';
import { MessagingModule } from './infra/messaging/messaging.module'
import { MailModule } from '@infra/mail/mail.module';

@Module({
  imports: [HttpModule, DatabaseModule, MessagingModule, MailModule],
})
export class AppModule {}

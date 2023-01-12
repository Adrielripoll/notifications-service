import { Module } from '@nestjs/common'
import { SendEmail } from './aws/services/sendEmail.service'

@Module({
    imports: [],
    controllers: [],
    providers: [SendEmail]
})
export class MailModule {}
import SES, { SendEmailRequest } from 'aws-sdk/clients/ses'
import AWS, {  } from 'aws-sdk'
import { Injectable } from '@nestjs/common'

type RecipientEmail = string

@Injectable()
export class SendEmail {
    async execute(recipientEmail: RecipientEmail){
        AWS.config.update({ region: 'sa-east-1' })
        const params: SendEmailRequest = {
            Source: 'noreply@service.com.br',
            Message: {
                Body: {
                    Text: {
                        Data: 'Você recebeu uma nova solicitação de amizade',
                        Charset: 'UTF-8'
                    },
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Nova solicitação de amizade'
                }
            },
            Destination: {
                ToAddresses: [recipientEmail]
            }
        }

        const mail = new SES().sendEmail(params).promise()
        const data = await mail
        console.log(data)
    }
}
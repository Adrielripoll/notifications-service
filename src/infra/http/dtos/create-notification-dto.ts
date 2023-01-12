import { IsEmail, IsNotEmpty, IsUUID, Length } from "class-validator";

export class createNotificationDto {
    @IsNotEmpty()
    @IsUUID()
    recipientId: string

    @IsNotEmpty()
    @Length(5, 240)
    content: string

    @IsNotEmpty()
    category: string

    @IsEmail()
    @IsNotEmpty()
    recipientEmail: string
}
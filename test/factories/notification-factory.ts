import { Content } from "@app/entities/content";
import { Notification, INotification } from "@app/entities/notification";

type Override = Partial<INotification>

export function makeNotification(override: Override = {}){
    return new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade'),
        recipientId:'recipient-1',
        recipientEmail: 'user@domain.com',
        ...override
    }) 
}
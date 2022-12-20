export class Content {
    private readonly content: string

    get Value(): string {
        return this.content
    }

    private validateContentLength(content: string): boolean {
        return content.length >= 5 && content.length <= 240
    }

    constructor(content: string){
        const isValidLength = this.validateContentLength(content)
        
        if(!isValidLength){
            throw new Error('Content length invalid')
        }

        this.content = content
    }
}
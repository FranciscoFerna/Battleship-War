export class MessageLog {
    constructor(logElement) {
        this.logElement = logElement
        this.messages = []
    }

    addMessage(type, content) {
        if (!this.logElement) return

        const message = {
            type,
            content,
            time: this.getFormattedTime(),
        }

        this.messages.push(message)
        this.renderMessages()
    }

    renderMessages() {
        if (!this.logElement) return

        // Mantener solo los últimos 10 mensajes para no sobrecargar la UI
        const recentMessages = this.messages.slice(-10)

        this.logElement.innerHTML = ""
        recentMessages.forEach((message) => {
            const messageElement = document.createElement("li")
            messageElement.className = `message ${message.type}`

            const timeElement = document.createElement("time")
            timeElement.className = "message-time"
            timeElement.textContent = message.time

            const contentElement = document.createElement("p")
            contentElement.className = "message-content"
            contentElement.textContent = message.content

            messageElement.appendChild(timeElement)
            messageElement.appendChild(contentElement)
            this.logElement.appendChild(messageElement)
        })
    }

    clear() {
        this.messages = []
        if (this.logElement) {
            this.logElement.innerHTML = ""
        }
    }

    getFormattedTime() {
        const now = new Date()
        const hours = String(now.getHours()).padStart(2, "0")
        const minutes = String(now.getMinutes()).padStart(2, "0")
        const seconds = String(now.getSeconds()).padStart(2, "0")
        return `${hours}:${minutes}:${seconds}`
    }
}


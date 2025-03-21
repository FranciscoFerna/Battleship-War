import { GameController } from "./controllers/GameController.js"
import { UIManager } from "./ui/UIManager.js"
import { MessageLog } from "./ui/MessageLog.js"

document.addEventListener("DOMContentLoaded", () => {
    const game = new GameController()

    // Inicializar elementos UI
    const playerBoardElement = document.querySelector(".boards-container .board-wrapper:nth-child(2) .board-grid")
    const enemyBoardElement = document.querySelector(".boards-container .board-wrapper:nth-child(1) .board-grid")
    const logElement = document.getElementById("log-container")

    // Configurar UI y MessageLog
    game.uiManager = new UIManager(playerBoardElement, enemyBoardElement)
    game.messageLog = new MessageLog(logElement)

    // Iniciar juego
    game.initGame()

    // Configurar botones
    const newGameButton = document.querySelector(".controls .control-btn:nth-child(1)")
    const resetButton = document.querySelector(".controls .control-btn:nth-child(2)")

    newGameButton.addEventListener("click", () => game.startNewGame())
    resetButton.addEventListener("click", () => game.resetGame())
})


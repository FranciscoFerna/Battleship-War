export class UIManager {
    constructor(playerBoardElement, enemyBoardElement) {
        this.playerBoardElement = playerBoardElement
        this.enemyBoardElement = enemyBoardElement
        this.setupBoards()
    }

    setupBoards() {
        // Crear celdas para ambos tableros
        this.createBoardCells(this.playerBoardElement)
        this.createBoardCells(this.enemyBoardElement)

        // Configurar eventos para el tablero enemigo
        this.setupEnemyBoardEvents()
    }

    createBoardCells(boardElement) {
        if (!boardElement) return

        boardElement.innerHTML = ""
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                const cell = document.createElement("div")
                cell.className = "cell"
                cell.dataset.row = row
                cell.dataset.col = col
                cell.setAttribute("role", "gridcell")
                cell.setAttribute("aria-label", `Celda ${String.fromCharCode(65 + col)}${row + 1}`)
                boardElement.appendChild(cell)
            }
        }
    }

    setupEnemyBoardEvents() {
        if (!this.enemyBoardElement) return

        this.enemyBoardElement.addEventListener("click", (e) => {
            const cell = e.target
            if (cell.classList.contains("cell") && !cell.classList.contains("hit") && !cell.classList.contains("miss")) {
                // Aquí iría la lógica para procesar el disparo
                console.log(`Disparo en ${cell.dataset.row}, ${cell.dataset.col}`)
            }
        })
    }

    renderPlayerBoard(board) {
        this.renderBoard(this.playerBoardElement, board, true)
    }

    renderEnemyBoard(board) {
        this.renderBoard(this.enemyBoardElement, board, false)
    }

    renderBoard(boardElement, board, isPlayerBoard) {
        if (!boardElement || !board) return

        const cells = boardElement.querySelectorAll(".cell")
        cells.forEach((cell) => {
            const row = Number.parseInt(cell.dataset.row)
            const col = Number.parseInt(cell.dataset.col)

            if (board.grid[row] && board.grid[row][col]) {
                const cellState = board.grid[row][col].getState()

                // Limpiar clases anteriores
                cell.className = "cell"

                // Aplicar clases según el estado
                if (cellState === "HIT") {
                    cell.classList.add("hit")
                } else if (cellState === "MISS") {
                    cell.classList.add("miss")
                } else if (cellState === "SHIP" && isPlayerBoard) {
                    cell.classList.add("ship")
                }
            }
        })
    }

    updateShipStatus(ships) {
        // Implementación para actualizar el estado visual de los barcos
        if (!ships) return

        const shipElements = document.querySelectorAll(".ship-item")
        ships.forEach((ship, index) => {
            if (index < shipElements.length) {
                const shipElement = shipElements[index]
                const healthSegments = shipElement.querySelectorAll(".health-segment")
                const nameSpan = shipElement.querySelector(".ship-name span:first-child")
                const statusSpan = shipElement.querySelector(".ship-name span:last-child")

                if (nameSpan) nameSpan.textContent = ship.getName()
                if (statusSpan) statusSpan.textContent = `${ship.hits}/${ship.getSize()}`

                healthSegments.forEach((segment, i) => {
                    if (i < ship.hits) {
                        segment.classList.add("hit")
                        segment.classList.remove("active")
                    } else {
                        segment.classList.add("active")
                        segment.classList.remove("hit")
                    }
                })
            }
        })
    }

    updateStatistics(stats) {
        // Implementación para actualizar las estadísticas del juego
        if (!stats) return

        const statElements = document.querySelectorAll(".stat-item .stat-value")
        if (statElements[0]) statElements[0].textContent = stats.shots || "0"
        if (statElements[1]) statElements[1].textContent = stats.hits || "0"
        if (statElements[2]) statElements[2].textContent = stats.accuracy ? `${stats.accuracy}%` : "0%"
        if (statElements[3]) statElements[3].textContent = `${stats.sunkShips || 0}/${stats.totalShips || 5}`
    }

    setupEventListeners() {
        // Implementación
    }
}


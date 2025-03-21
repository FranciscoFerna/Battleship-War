import { Cell } from "./Cell.js"

export class Board {
    constructor(rows = 10, columns = 10) {
        this.rows = rows
        this.columns = columns
        this.grid = this.createGrid()
        this.ships = []
    }

    createGrid() {
        const grid = []
        for (let row = 0; row < this.rows; row++) {
            grid[row] = []
            for (let col = 0; col < this.columns; col++) {
                grid[row][col] = new Cell(row, col)
            }
        }
        return grid
    }

    canPlaceShip(ship, row, col, isHorizontal) {
        const shipSize = ship.getSize()

        if (isHorizontal) {
            if (col + shipSize > this.columns) {
                return false
            }
            for (let i = 0; i < shipSize; i++) {
                if (this.grid[row][col + i].hasShip) {
                    return false
                }
            }
        } else {
            if (row + shipSize > this.rows) {
                return false
            }
            for (let i = 0; i < shipSize; i++) {
                if (this.grid[row + i][col].hasShip) {
                    return false
                }
            }
        }

        return true
    }

    placeShip(ship, row, col, isHorizontal) {
        const shipSize = ship.getSize()
        if (!this.canPlaceShip(ship, row, col, isHorizontal)) {
            return false
        }

        if (isHorizontal) {
            for (let i = 0; i < shipSize; i++) {
                this.grid[row][col + i].hasShip = true
                this.grid[row][col + i].shipId = ship.id
            }
        } else {
            for (let i = 0; i < shipSize; i++) {
                this.grid[row + i][col].hasShip = true
                this.grid[row + i][col].shipId = ship.id
            }
        }
        this.ships.push(ship)
        return true
    }

    placeShipsRandomly(shipsData) {
        let shipIdCounter = 0
        shipsData.forEach((shipData) => {
            let placed = false
            while (!placed) {
                const row = Math.floor(Math.random() * this.rows)
                const col = Math.floor(Math.random() * this.columns)
                const isHorizontal = Math.random() < 0.5
                const ship = {
                    id: shipIdCounter++,
                    name: shipData.name,
                    size: shipData.size,
                    hits: 0,
                    getSize: () => shipData.size,
                } // Simplified ship object

                if (this.canPlaceShip(ship, row, col, isHorizontal)) {
                    this.placeShip(ship, row, col, isHorizontal)
                    placed = true
                }
            }
        })
    }

    receiveShot(row, col) {
        const cell = this.grid[row][col]
        return cell.shoot()
    }
}


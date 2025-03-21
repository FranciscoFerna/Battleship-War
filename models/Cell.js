import { ShotResults, CellState } from './Enums.js';

export class Cell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.hasShip = false;
        this.shipId = null;
        this.isHit = false;
    }

    // Devolvemos las cordenadas de la celda
    getCordinates() {
        return { row: this.row, col: this.col };
    }

    // Procesa un disparo en esta celda y devuelve el resultado
    shoot() {
        if (this.isHit) {
            return ShotResults.INVALID
        }
        this.isHit = true
        if (this.hasShip) {
            return ShotResults.HIT
        } else {
            return ShotResults.MISS
        }
    }

    getState() {
        if (!this.isHit) {
            return this.hasShip ? CellState.SHIP : CellState.EMPTY
        } else {
            return this.hasShip ? CellState.HIT : CellState.MISS
        }
    }
}
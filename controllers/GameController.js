import { Board } from '../models/Board.js';
import { MessageLog } from '../ui/MessageLog.js';
import { UIManager } from '../ui/UIManager.js';

export class GameController {
    constructor() {
        this.playerBoard = new Board();
        this.enemyBoard = new Board();
        this.messageLog = null;
        this.shipsData = [
            { "name": "Portaaviones", "size": 5 },
            { "name": "Acorazado", "size": 4 },
            { "name": "Crucero", "size": 3 },
            { "name": "Submarino", "size": 3 },
            { "name": "Destructor", "size": 2 }
        ];
    }

    // Inicializamos el juego
    initGame() {
        // Colocamos los barcos aleatoriamente en ambos tableros
        this.playerBoard.placeShipsRandomly(this.shipsData);
        this.enemyBoard.placeShipsRandomly(this.shipsData);

        console.log("Juego inicializado. Barcos colocados aleatoriamente")

        // Aqui configurariamos todo lo que es interfaz de usuario

    }

    // Inicia una nueva partida
    startNewGame() {
        this.initGame();
        // Implementacion de la logica adicional para iniciar el juego
    }

    // Reinicia el juego actual
    resetGame() {
        this.initGame();
        // Implementacion de la logica adicional para reiniciar el juego
    }
    
    // Actualiza las estadisticas del juego
    updateStats() {
        // Logica para actualizar estadisticas
    }
}

// Ejemplos de uso
function initalizeGame() {
    const game = new GameController();
    game.initGame();

    // Para propositos de demostracion, mostramos el tablero del jugador y la IA en la consola
    console.log("Tablero del jugador: ")
    displayBoard(game.playerBoard);
}

// Funcion auxiliar para mostrar el tablero en la consola
function displayBoard(board) {
    for (let row = 0; row < board.rows; row++) {
        let rowStr = "";
        for (let col = 0; col < board.columns; col++) {
            const cell = board.grid[row][col];
            if (cell.hasShip) {
                rowStr += "S ";
            } else {
                rowStr += ". ";
            }
        }
        console.log(rowStr);
    }
}

// Iniciaremos el juego cuando se cargue la página
initalizeGame();
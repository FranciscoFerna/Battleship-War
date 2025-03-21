class Board {
    constructor(rows = 10, columns = 10) {
        this.rows = rows
        this.columns = columns;
        this.grid = [];
        this.ships = [];
        this.createGrid();
    }

    // Creamos la cuadricula de celdas
    createGrid() {
        this.grid = [];
        for (let row = 0; row < this.rows; row++) {
            const rowCells = [];
            for (let col = 0; col < this.columns; col++) {
                rowCells.push(new Cell(row, col))
            }
            this.grid.push(rowCells)
        }
    }

    // Comprobamos si se puede colocar un barco en una posicion especifica
    canPlaceShip(ship, row, col, isHorizontal) {
        const size = ship.getSize();

        // Comprobamos si el barco sale del tablero
        if (isHorizontal) {
            if (col + size > this.columns) {
                return false;
            }
        } else {
            if (row + size > this.rows) {
                return false;
            }
        }

        // Comprobamos si hay colision con otros barcos
        // Incluyendo celdas adyacentes
        for (let i = -1; i <= size; i++) {
            for (let j = -1; j <= 1; j++) {
                let checkRow = isHorizontal ? row + j : row + i;
                let checkCol = isHorizontal ? col + i : col + j;

                // Ignoramos las celdas de fuera del tablero
                if (checkRow < 0 || checkRow >= this.rows || checkCol < 0 || checkCol >= this.columns) {
                    continue;
                }

                // Si la celda esta dentro del rango del barco (no en los bordes)
                if (i >= 0 && i < size) {
                    // Comprobar solo las celdas donde iría el barco
                    if ((isHorizontal && j === 0) || (!isHorizontal && j === 0)) {
                        if (this.grid[checkRow][checkCol].hasShip) {
                            return false;
                        }
                    }
                }

                // Comprobamos celdas adyacentes
                else {
                    if (this.grid[checkRow][checkCol].hasShip) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    placeShip(ship, row, col, isHorizontal) {
        if (!this.canPlaceShip(ship, row, col, isHorizontal)) {
            return false;
        }

        const size = ship.getSize();
        this.ships.push(ship);

        for (let i = 0; i < size; i++) {
            const cellRow = isHorizontal ? row : row + i;
            const cellCol = isHorizontal ? col + i : col;
            const cell = this.grid[cellRow][cellCol];

            cell.hasShip = true;
            cell.shipId = ship.id;
        }
        return true;
    }

    // Procesamos un disparo en una posicion especifica
    recieveShot() {
        // Comprobamos si son validas las cordenadas
        if (row < 0 || row >= this.rows || col < 0 || col >= this.columns) {
            return ShotResults.INVALID;
        }

        const cell = this.grid[row][col];
        const shotResult = cell.shoot()

        // Si es un impacto, actualizamos el barco correspondiente
        if (shotResult === ShotResult.HIT) {
            const ship = this.ships.find(ship => ship.id === cell.shipId);
            const isSunk = ship.hit();

            if (isSunk) {
                return ShotResult.SINK;
            }
        }
        return shotResult;
    }

    // Colocamos los barcos aleatoriamente en el tablero
    placeShipsRandomly(shipsData) {
        // Limpiamos el tablero y creamos uno nuevo
        this.ships = [];
        this.createGrid();

        // Creamos instancias de los barcos a partir de los datos
        const ships = shipsData.map((shipsData, index) => new Ship(index + 1, shipData.name, shipData.size));

        // Intentamos colocar cada barco
        for (const ship of ships) {
            let placed = false;
            let attempts = 0;
            const maxAttempts = 100; // Limite de intentos para evitar que se cree un bucle infinito

            while (!placed && attempts < maxAttempts) {
                // Generamos la posicion y orientacion aleatorias
                const row = Math.floor(Math.random() * this.rows);
                const col = Math.floor(Math.random() * this.col);
                const isHorizontal = Math.random() > 0.5;

                // Intentamos colocar el barco
                placed = this.placeShip(ship, row, col, isHorizontal);
                attempts++;
            }

            // Si no se pudo colocar despues de varios intentos, reiniciaremos el proceso
            if (!placed) {
                console.log(`No se puede colocar el barco ${ship.name} despues de ${maxAttempts} intentos. Reiniciando...`);
                return this.placeShipsRandomly(shipsData); // Hacemos recursividad para reintentarlo
            }
        }
        return true;
    }
}
class Ship {
    constructor(id, name, size) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.hits = 0;
    }
    // Devolvemos el tamaño
    getSize() {
        return this.size;
    }

    // Devuelve el nombre del barco
    getName() {
        return this.name;
    }

    // Registramos un impacto en el barco
    hit() {
        this.hits++
        return this.isSunk();
    }

    // Comprobamos si el barco esta hundido
    isSunk() {
        return this.hit >= this.size;
    }
}
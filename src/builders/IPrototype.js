// src/builders/IPrototype.js

/**
 * Define la interfaz para objetos clonables.
 */
class IPrototype {
    /**
     * Crea una copia superficial del objeto.
     * @returns {IPrototype}
     */
    clone() {
        throw new Error("El método clone() debe ser implementado.");
    }

    /**
     * Crea una copia profunda y completamente independiente del objeto.
     * @returns {IPrototype}
     */
    deepclone() {
        throw new Error("El método deepclone() debe ser implementado.");
    }
}

module.exports = IPrototype;
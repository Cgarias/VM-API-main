// src/factories/VMFactory.js

class VMFactory {
    /**
     * Crea y devuelve una instancia del Builder específico del proveedor.
     * @returns {IBuilder} Una instancia de una clase que implementa IBuilder.
     */
    createBuilder() {
        throw new Error("El método createBuilder() debe ser implementado por la subclase.");
    }
}

module.exports = VMFactory;
class VMFactory {
    /**
     * Crea una instancia completamente nueva de un Builder.
     * @returns {IBuilder}
     */
    createBuilder() {
        throw new Error("El método createBuilder() debe ser implementado por la subclase.");
    }

    /**
     * Obtiene una instancia prototipo compartida del builder.
     * @returns {IPrototype & IBuilder} El builder prototipo, que es clonable.
     */
    getPrototype() {
        throw new Error("El método getPrototype() debe ser implementado por la subclase.");
    }
}

module.exports = VMFactory;
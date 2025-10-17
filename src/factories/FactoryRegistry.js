// src/factories/FactoryRegistry.js

class FactoryRegistry {
    constructor() {
        if (FactoryRegistry.instance) {
            return FactoryRegistry.instance;
        }
        this.factories = {};
        FactoryRegistry.instance = this;
    }

    /**
     * Registra una clase de fábrica para un proveedor específico.
     * @param {string} provider El nombre del proveedor (ej. 'aws').
     * @param {VMFactory} factoryClass La clase de la fábrica a registrar.
     */
    register(provider, factoryClass) {
        this.factories[provider.toLowerCase()] = factoryClass;
    }

    /**
     * Obtiene la clase de fábrica para un proveedor.
     * @param {string} provider El nombre del proveedor.
     * @returns {VMFactory|undefined} La clase de la fábrica o undefined si no se encuentra.
     */
    getFactory(provider) {
        return this.factories[provider.toLowerCase()];
    }
}

// Exportamos una única instancia para toda la aplicación (Singleton)
const instance = new FactoryRegistry();
module.exports = instance;
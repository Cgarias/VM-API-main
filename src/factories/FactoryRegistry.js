
class FactoryRegistry {
    constructor() {
        this.factories = {};
    }

    register(provider, factoryClass) {
        this.factories[provider.toLowerCase()] = factoryClass;
    }

    getFactory(provider) {
        return this.factories[provider.toLowerCase()];
    }
}

// Singleton
module.exports = new FactoryRegistry();

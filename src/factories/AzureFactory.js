const VMFactory = require("./VMFactory");
const FactoryRegistry = require("./FactoryRegistry");
const AzureBuilder = require("../builders/AzureBuilder");

// Variable a nivel de módulo para almacenar el prototipo (Singleton a nivel de fábrica)
let azurePrototype = null;

class AzureFactory extends VMFactory {
    /**
     * Mantenemos este método por si se necesita un builder nuevo sin usar el prototipo.
     */
    createBuilder() {
        return new AzureBuilder();
    }

    /**
     * Devuelve una instancia compartida del prototipo.
     * La crea solo la primera vez que se solicita (lazy loading).
     */
    getPrototype() {
        if (!azurePrototype) {
            console.log("Creando prototipo de AzureBuilder por primera vez...");
            azurePrototype = new AzureBuilder();
        }
        return azurePrototype;
    }
}

FactoryRegistry.register("azure", AzureFactory);
module.exports = AzureFactory;
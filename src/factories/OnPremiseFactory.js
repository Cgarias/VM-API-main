// src/factories/OnPremiseFactory.js

const VMFactory = require("./VMFactory");
const FactoryRegistry = require("./FactoryRegistry");
const OnPremiseBuilder = require("../builders/OnPremiseBuilder");

// Variable para almacenar el prototipo On-Premise (Singleton a nivel de fábrica)
let onPremisePrototype = null;

class OnPremiseFactory extends VMFactory {
    createBuilder() {
        return new OnPremiseBuilder();
    }

    getPrototype() {
        if (!onPremisePrototype) {
            console.log("Creando prototipo de OnPremiseBuilder por primera vez...");
            onPremisePrototype = new OnPremiseBuilder();
        }
        return onPremisePrototype;
    }
}

FactoryRegistry.register("onpremise", OnPremiseFactory);
FactoryRegistry.register("on-premise", OnPremiseFactory); // Alias
module.exports = OnPremiseFactory;
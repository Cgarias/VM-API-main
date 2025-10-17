// src/factories/OnPremiseFactory.js

const VMFactory = require("./VMFactory");
const FactoryRegistry = require("./FactoryRegistry");
const OnPremiseBuilder = require("../builders/OnPremiseBuilder");

class OnPremiseFactory extends VMFactory {
    createBuilder() {
        return new OnPremiseBuilder();
    }
}

// Se registra a sí misma en el registro central
FactoryRegistry.register("onpremise", OnPremiseFactory);
FactoryRegistry.register("on-premise", OnPremiseFactory); // Alias

module.exports = OnPremiseFactory;
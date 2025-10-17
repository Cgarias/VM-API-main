// src/factories/AzureFactory.js

const VMFactory = require("./VMFactory");
const FactoryRegistry = require("./FactoryRegistry");
const AzureBuilder = require("../builders/AzureBuilder");

class AzureFactory extends VMFactory {
    createBuilder() {
        return new AzureBuilder();
    }
}

// Se registra a sí misma en el registro central
FactoryRegistry.register("azure", AzureFactory);

module.exports = AzureFactory;
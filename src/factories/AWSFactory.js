// src/factories/AWSFactory.js

const VMFactory = require("./VMFactory");
const FactoryRegistry = require("./FactoryRegistry");
const AWSBuilder = require("../builders/AWSBuilder");

class AWSFactory extends VMFactory {
    createBuilder() {
        return new AWSBuilder();
    }
}

// Se registra a sí misma en el registro central
FactoryRegistry.register("aws", AWSFactory);

module.exports = AWSFactory;
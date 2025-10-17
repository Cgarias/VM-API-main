// src/factories/GCPFactory.js

const VMFactory = require("./VMFactory");
const FactoryRegistry = require("./FactoryRegistry");
const GCPBuilder = require("../builders/GCPBuilder");

class GCPFactory extends VMFactory {
    createBuilder() {
        return new GCPBuilder();
    }
}

// Se registra a sí misma en el registro central
FactoryRegistry.register("gcp", GCPFactory);

module.exports = GCPFactory;
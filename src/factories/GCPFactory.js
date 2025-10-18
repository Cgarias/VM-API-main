// src/factories/GCPFactory.js

const VMFactory = require("./VMFactory");
const FactoryRegistry = require("./FactoryRegistry");
const GCPBuilder = require("../builders/GCPBuilder");

// Variable para almacenar el prototipo de GCP (Singleton a nivel de fábrica)
let gcpPrototype = null;

class GCPFactory extends VMFactory {
    createBuilder() {
        return new GCPBuilder();
    }

    getPrototype() {
        if (!gcpPrototype) {
            console.log("Creando prototipo de GCPBuilder por primera vez...");
            gcpPrototype = new GCPBuilder();
        }
        return gcpPrototype;
    }
}

FactoryRegistry.register("gcp", GCPFactory);
module.exports = GCPFactory;
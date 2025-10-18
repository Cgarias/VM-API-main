// src/factories/AWSFactory.js

const VMFactory = require("./VMFactory");
const FactoryRegistry = require("./FactoryRegistry");
const AWSBuilder = require("../builders/AWSBuilder");

// Variable para almacenar el prototipo de AWS (Singleton a nivel de fábrica)
let awsPrototype = null;

class AWSFactory extends VMFactory {
    createBuilder() {
        return new AWSBuilder();
    }

    getPrototype() {
        if (!awsPrototype) {
            console.log("Creando prototipo de AWSBuilder por primera vez...");
            awsPrototype = new AWSBuilder();
        }
        return awsPrototype;
    }
}

FactoryRegistry.register("aws", AWSFactory);
module.exports = AWSFactory;
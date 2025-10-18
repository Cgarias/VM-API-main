// src/builders/AWSBuilder.js

const IBuilder = require("./IBuilder");
const IPrototype = require("./IPrototype");
const VirtualMachineProduct = require("../models/VirtualMachineProduct");

class AWSBuilder extends IBuilder {
    constructor() {
        super();
        this.product = new VirtualMachineProduct("AWS");
        this._config = {};
    }

    setCPU(vcpus) {
        this._config.vcpus = vcpus;
        return this;
    }

    setRAM(memoryGB) {
        this._config.memoryGB = memoryGB;
        return this;
    }

    buildVirtualMachine(params) {
        const AWSVirtualMachine = require("../models/aws/AWSVirtualMachine");
        const vmParams = { ...params, ...this._config };
        this.product.vm = new AWSVirtualMachine(vmParams);
        return this;
    }

    buildNetwork(params) {
        const AWSNetwork = require("../models/aws/AWSNetwork");
        this.product.network = new AWSNetwork(params);
        return this;
    }

    buildStorage(params) {
        const AWSStorage = require("../models/aws/AWSStorage");
        this.product.storage = new AWSStorage(params);
        return this;
    }

    getResult() {
        if (!this.product.network || !this.product.storage) {
            throw new Error("Network and Storage must be built before getting the result.");
        }
        if (this.product.network.region !== this.product.storage.region) {
            throw new Error("Region mismatch between Network and Storage for AWS.");
        }
        return this.product;
    }

    // --- Implementación de IPrototype ---

    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    deepclone() {
        const serialized = JSON.stringify({ _config: this._config });
        const newBuilder = new AWSBuilder(); // <-- Instancia correcta
        Object.assign(newBuilder, JSON.parse(serialized));
        
        newBuilder.product = new VirtualMachineProduct("AWS"); // <-- Producto correcto
        
        return newBuilder;
    }
}

module.exports = AWSBuilder;
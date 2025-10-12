// src/builders/AzureBuilder.js

const IBuilder = require("./IBuilder");
const VirtualMachineProduct = require("../models/VirtualMachineProduct");

// NO importamos los modelos de Azure aquí arriba.

class AzureBuilder extends IBuilder {
    constructor() {
        super();
        this.product = new VirtualMachineProduct("Azure");
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
        // Hacemos el require() JUSTO cuando lo necesitamos
        const AzureVirtualMachine = require("../models/azure/AzureVirtualMachine");
        
        const vmParams = { ...params, ...this._config };
        this.product.vm = new AzureVirtualMachine(vmParams);
        return this;
    }

    buildNetwork(params) {
        // Hacemos el require() JUSTO cuando lo necesitamos
        const AzureNetwork = require("../models/azure/AzureNetwork");
        
        this.product.network = new AzureNetwork(params);
        return this;
    }

    buildStorage(params) {
        // Hacemos el require() JUSTO cuando lo necesitamos
        const AzureStorage = require("../models/azure/AzureStorage");
        
        this.product.storage = new AzureStorage(params);
        return this;
    }

    getResult() {
        if (!this.product.network || !this.product.storage) {
            throw new Error("Network and Storage must be built before getting the result.");
        }
        
        if (this.product.network.region !== this.product.storage.region) {
            throw new Error("Region mismatch between Network and Storage for Azure.");
        }
        return this.product;
    }
}

module.exports = AzureBuilder;
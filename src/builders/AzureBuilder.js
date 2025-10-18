const IBuilder = require("./IBuilder");
const IPrototype = require("./IPrototype"); // <-- 1. Importar
const VirtualMachineProduct = require("../models/VirtualMachineProduct");

// En JS, la implementación de interfaces es implícita al añadir los métodos
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
        const AzureVirtualMachine = require("../models/azure/AzureVirtualMachine");
        const vmParams = { ...params, ...this._config };
        this.product.vm = new AzureVirtualMachine(vmParams);
        return this;
    }

    buildNetwork(params) {
        const AzureNetwork = require("../models/azure/AzureNetwork");
        this.product.network = new AzureNetwork(params);
        return this;
    }

    buildStorage(params) {
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

    // --- 2. Implementación de IPrototype ---

    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    /**
     * Crea una copia profunda y segura del builder, reiniciando el producto.
     */
    deepclone() {
        // La serialización/deserialización es una forma simple de hacer una copia profunda
        // para objetos compatibles con JSON.
        const serialized = JSON.stringify({ _config: this._config });
        const newBuilder = new AzureBuilder();
        Object.assign(newBuilder, JSON.parse(serialized));
        
        newBuilder.product = new VirtualMachineProduct("Azure");
        
        return newBuilder;
    }
}

module.exports = AzureBuilder;
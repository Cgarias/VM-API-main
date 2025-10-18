// src/builders/GCPBuilder.js

const IBuilder = require("./IBuilder");
const IPrototype = require("./IPrototype");
const VirtualMachineProduct = require("../models/VirtualMachineProduct");

class GCPBuilder extends IBuilder {
    constructor() {
        super();
        this.product = new VirtualMachineProduct("GCP");
        this._config = {};
    }

    // ... (métodos setCPU, setRAM, build... no cambian)
    setCPU(vcpus) { this._config.vcpus = vcpus; return this; }
    setRAM(memoryGB) { this._config.memoryGB = memoryGB; return this; }
    buildVirtualMachine(params) {
        const GCPVirtualMachine = require("../models/gcp/GCPVirtualMachine");
        const vmParams = { ...params, ...this._config };
        this.product.vm = new GCPVirtualMachine(vmParams);
        return this;
    }
    buildNetwork(params) {
        const GCPNetwork = require("../models/gcp/GCPNetwork");
        this.product.network = new GCPNetwork(params);
        return this;
    }
    buildStorage(params) {
        const GCPStorage = require("../models/gcp/GCPStorage");
        this.product.storage = new GCPStorage(params);
        return this;
    }
    getResult() {
        if (!this.product.network || !this.product.storage) throw new Error("Network y Storage deben construirse.");
        if (this.product.network.region !== this.product.storage.region) throw new Error("La región debe coincidir (GCP).");
        return this.product;
    }
    // --- Fin de métodos build ---

    // --- Implementación de IPrototype ---

    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    deepclone() {
        const serialized = JSON.stringify({ _config: this._config });
        const newBuilder = new GCPBuilder(); // <-- Instancia correcta
        Object.assign(newBuilder, JSON.parse(serialized));
        
        newBuilder.product = new VirtualMachineProduct("GCP"); // <-- Producto correcto
        
        return newBuilder;
    }
}

module.exports = GCPBuilder;
const IBuilder = require("./IBuilder");
const VirtualMachineProduct = require("../models/VirtualMachineProduct");

class GCPBuilder extends IBuilder {
    constructor() {
        super();
        this.product = new VirtualMachineProduct("GCP");
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
        if (!this.product.network || !this.product.storage)
            throw new Error("Network y Storage deben construirse antes de obtener el resultado.");

        if (this.product.network.region !== this.product.storage.region)
            throw new Error("La región de Network y Storage debe coincidir (GCP).");

        return this.product;
    }
}

module.exports = GCPBuilder;

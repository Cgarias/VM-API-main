const IBuilder = require("./IBuilder");
const VirtualMachineProduct = require("../models/VirtualMachineProduct");

class OnPremiseBuilder extends IBuilder {
    constructor() {
        super();
        this.product = new VirtualMachineProduct("On-Premise");
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
        const OnPremiseVM = require("../models/onprem/OnPremiseVirtualMachine");
        const vmParams = { ...params, ...this._config };
        this.product.vm = new OnPremiseVM(vmParams);
        return this;
    }

    buildNetwork(params) {
        const OnPremiseNetwork = require("../models/onprem/OnPremiseNetwork");
        this.product.network = new OnPremiseNetwork(params);
        return this;
    }

    buildStorage(params) {
        const OnPremiseStorage = require("../models/onprem/OnPremiseStorage");
        this.product.storage = new OnPremiseStorage(params);
        return this;
    }

    getResult() {
        if (!this.product.network || !this.product.storage)
            throw new Error("Network y Storage deben construirse antes de obtener el resultado.");

        if (this.product.network.region !== this.product.storage.region)
            throw new Error("La región de Network y Storage debe coincidir (On-Premise).");

        return this.product;
    }
}

module.exports = OnPremiseBuilder;

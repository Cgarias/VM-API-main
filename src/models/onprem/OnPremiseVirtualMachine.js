class OnPremiseVirtualMachine {
    constructor(params) {
        this.provider = "On-Premise";
        this.vcpus = params.vcpus;
        this.memoryGB = params.memoryGB;
        this.memoryOptimization = params.memoryOptimization || false;
        this.diskOptimization = params.diskOptimization || false;
        this.keyPairName = params.keyPairName || "local-key";
    }
}
module.exports = OnPremiseVirtualMachine;

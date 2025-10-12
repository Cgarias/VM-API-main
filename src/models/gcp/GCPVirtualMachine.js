class GCPVirtualMachine {
    constructor(params) {
        this.provider = "GCP";
        this.vcpus = params.vcpus;
        this.memoryGB = params.memoryGB;
        this.keyPairName = params.keyPairName || null;
        this.memoryOptimization = params.memoryOptimization || false;
        this.diskOptimization = params.diskOptimization || false;
    }
}
module.exports = GCPVirtualMachine;
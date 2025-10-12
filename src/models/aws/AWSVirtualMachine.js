class AWSVirtualMachine {
    constructor(params) {
        this.provider = "AWS";
        this.vcpus = params.vcpus;
        this.memoryGB = params.memoryGB;
        this.keyPairName = params.keyPairName; // Parámetro opcional
    }
}
module.exports = AWSVirtualMachine;
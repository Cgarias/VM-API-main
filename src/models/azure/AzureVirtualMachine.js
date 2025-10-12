class AzureVirtualMachine {
    constructor(params) {
        this.provider = "Azure";
        this.vcpus = params.vcpus;
        this.memoryGB = params.memoryGB;
      
        this.adminUsername = params.adminUsername; 
    }
}

module.exports = AzureVirtualMachine;
class VirtualMachineProduct {
    constructor(provider) {
        this.provider = provider;
        this.vm = null;
        this.network = null;
        this.storage = null;
    }

    // Método para mostrar los detalles
    getDetails() {
        return {
            provider: this.provider,
            vm: this.vm,
            network: this.network,
            storage: this.storage
        };
    }
}
module.exports = VirtualMachineProduct;
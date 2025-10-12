const VMProvider = require("./VMProvider");

class VMOnPremise extends VMProvider {
    constructor({ cpu, ram, disk, network }) {
        super({ provider: "OnPremise" });
        this.cpu = cpu;
        this.ram = ram;
        this.disk = disk;
        this.network = network;
    }
}

module.exports = VMOnPremise;

const VMProvider = require("./VMProvider");

class VMGCP extends VMProvider {
    constructor({ machineType, zone, disk, project }) {
        super({ provider: "GCP" });
        this.machineType = machineType;
        this.zone = zone;
        this.disk = disk;
        this.project = project;
    }
}

module.exports = VMGCP;

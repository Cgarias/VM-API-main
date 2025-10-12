const VMFactory = require("./VMFactory");
const { register } = require("./index");
const VMGCP = require("../models/VMGCP");

class GCPFactory extends VMFactory {
    createVM(params) {
        return new VMGCP(params);
    }
}

register("GCP", GCPFactory);
module.exports = GCPFactory;

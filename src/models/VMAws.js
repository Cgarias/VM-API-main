const VMProvider = require("./VMProvider");

class VMAws extends VMProvider {
    constructor({ instanceType, region, vpc, ami }) {
        super({ provider: "AWS" });
        this.instanceType = instanceType;
        this.region = region;
        this.vpc = vpc;
        this.ami = ami;
    }
}

module.exports = VMAws;

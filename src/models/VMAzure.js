const VMProvider = require("./VMProvider");

class VMAzure extends VMProvider {
    constructor({ size, resourceGroup, image, vnet }) {
        super({ provider: "Azure" });
        this.size = size;
        this.resourceGroup = resourceGroup;
        this.image = image;
        this.vnet = vnet;
    }
}

module.exports = VMAzure;

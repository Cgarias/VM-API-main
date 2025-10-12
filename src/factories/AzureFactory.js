const { register } = require("./index");
const VMFactory = require("./VMFactory");
const VMAzure = require("../models/VMAzure");

class AzureFactory extends VMFactory {
  createVM(params) {
    return new VMAzure(params);
  }
}

register("azure", AzureFactory);
module.exports = AzureFactory;

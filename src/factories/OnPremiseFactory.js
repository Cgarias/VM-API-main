const VMFactory = require("./VMFactory");
const { register } = require("./index");
const VMOnpremise = require("../models/VMOnPremise");

class OnPremiseFactory extends VMFactory {
    createVM(params) {
        return new VMOnpremise(params);
    }
}

register("OnPremise", OnPremiseFactory);
module.exports = OnPremiseFactory;

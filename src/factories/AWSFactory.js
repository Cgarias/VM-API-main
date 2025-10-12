const VMFactory = require("./VMFactory");
const { register } = require("./index");
const VMAws = require("../models/VMAws");

class AWSFactory extends VMFactory {
    createVM(params) {
        return new VMAws(params);
    }
}

register("aws", AWSFactory);
module.exports = AWSFactory;

class OnPremiseStorage {
    constructor(params) {
        this.provider = "On-Premise";
        this.region = params.region;
        this.iops = params.iops || 1500;
    }
}
module.exports = OnPremiseStorage;

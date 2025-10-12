class OnPremiseNetwork {
    constructor(params) {
        this.provider = "On-Premise";
        this.region = params.region;
        this.firewallRules = params.firewallRules || ["SSH"];
        this.publicIP = params.publicIP || false;
    }
}
module.exports = OnPremiseNetwork;

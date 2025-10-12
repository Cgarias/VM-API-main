class GCPNetwork {
    constructor(params) {
        this.provider = "GCP";
        this.region = params.region;
        this.firewallRules = params.firewallRules || ["HTTP", "SSH"];
        this.publicIP = params.publicIP || false;
    }
}
module.exports = GCPNetwork;

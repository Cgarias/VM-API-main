class AWSNetwork {
    constructor(params) {
        this.provider = "AWS";
        this.region = params.region;
        this.firewallRules = params.firewallRules; // Parámetro opcional
    }
}
module.exports = AWSNetwork;
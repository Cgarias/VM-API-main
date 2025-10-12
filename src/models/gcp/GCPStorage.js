class GCPStorage {
    constructor(params) {
        this.provider = "GCP";
        this.region = params.region;
        this.iops = params.iops || 3000;
    }
}
module.exports = GCPStorage;

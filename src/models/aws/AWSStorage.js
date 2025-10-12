class AWSStorage {
    constructor(params) {
        this.provider = "AWS";
        this.region = params.region;
        this.iops = params.iops; // Parámetro opcional
    }
}
module.exports = AWSStorage;
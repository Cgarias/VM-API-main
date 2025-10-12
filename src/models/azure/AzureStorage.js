
class AzureStorage {
    constructor(params) {
        this.provider = "Azure";
        this.region = params.region;
        
        this.diskType = params.diskType;
    }
}

module.exports = AzureStorage;
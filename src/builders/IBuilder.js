class IBuilder {
    setCPU(vcpus) { throw new Error("Method not implemented!"); }
    setRAM(memoryGB) { throw new Error("Method not implemented!"); }
    buildVirtualMachine(params) { throw new Error("Method not implemented!"); }
    buildNetwork(params) { throw new Error("Method not implemented!"); }
    buildStorage(params) { throw new Error("Method not implemented!"); }
    getResult() { throw new Error("Method not implemented!"); }
}
module.exports = IBuilder;
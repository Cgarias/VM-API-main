class VMFactory {
    createVM(params) {
        throw new Error("Método createVM() debe implementarse en la subclase");
    }
}

module.exports = VMFactory;

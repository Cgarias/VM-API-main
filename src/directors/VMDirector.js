const flavors = require("./flavors");

class VMDirector {
    construct(builder, provider, vmType, params) {
        const flavor = flavors[provider.toLowerCase()]?.[vmType];
        if (!flavor) {
            throw new Error(`VM type '${vmType}' not supported for provider '${provider}'`);
        }

        // 1️⃣ Configuración base
        builder.setCPU(flavor.vcpus).setRAM(flavor.memoryGB);

        // 2️⃣ Construcción paso a paso
        builder.buildVirtualMachine(params.vm);
        builder.buildNetwork(params.network);
        builder.buildStorage(params.storage);

        // 3️⃣ Obtener el producto final
        const product = builder.getResult();

        // 4️⃣ Validaciones cruzadas
        this.validateResources(product.vm, product.network, product.storage);

        // 5️⃣ Retornar el producto final al controlador
        return product;
    }

    validateResources(vm, network, storage) {
        if (
            vm.provider.toLowerCase() !== network.provider.toLowerCase() ||
            vm.provider.toLowerCase() !== storage.provider.toLowerCase()
        ) {
            throw new Error("Los recursos no pertenecen al mismo proveedor");
        }

        if (network.region !== storage.region) {
            throw new Error("La región de red y almacenamiento debe ser la misma");
        }
    }
}

module.exports = new VMDirector();

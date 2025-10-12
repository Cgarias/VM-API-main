const VMDirector = require("../directors/VMDirector");

// Un simple "Factory" para obtener el builder correcto
const getBuilder = (provider) => {
    switch (provider.toLowerCase()) {
        case "aws":
            const AWSBuilder = require("../builders/AWSBuilder");
            return new AWSBuilder();
        case "azure":
            const AzureBuilder = require("../builders/AzureBuilder");
            return new AzureBuilder();
        case "gcp":
            const GCPBuilder = require("../builders/GCPBuilder");
            return new GCPBuilder();
        case "onpremise":
        case "on-premise":
            const OnPremiseBuilder = require("../builders/OnPremiseBuilder");
            return new OnPremiseBuilder();
        default:
            return null;
    }
};

exports.provisionVM = (req, res) => {
    const { provider, vmType, params } = req.body;

    const builder = getBuilder(provider);
    if (!builder) {
        return res.status(400).json({ success: false, error: "Proveedor no soportado" });
    }

    try {
        // ✅ El director devuelve el producto final (si actualizaste tu VMDirector.js)
        const vmProduct = VMDirector.construct(builder, provider, vmType, params);

        // Obtiene los detalles del producto (usa tu clase VirtualMachineProduct)
        const vmDetails = vmProduct.getDetails();
        const id = `${provider}-${Date.now()}`;

        res.json({
            success: true,
            id,
            details: vmDetails
        });

    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ success: false, error: err.message });
    }
};

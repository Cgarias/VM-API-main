const VMDirector = require("../directors/VMDirector");
const FactoryRegistry = require("../factories/FactoryRegistry"); 
require("../factories/loader"); // Carga y registra todas las fábricas

exports.provisionVM = (req, res) => {
    const { provider, vmType, params } = req.body;

    const Factory = FactoryRegistry.getFactory(provider);
    if (!Factory) {
        return res.status(400).json({ success: false, error: "Proveedor no soportado" });
    }

    try {
        const factoryInstance = new Factory();

        // --- Lógica actualizada para usar el Prototype ---
        
        // 1. Obtenemos el prototipo maestro desde la fábrica.
        const prototype = factoryInstance.getPrototype();
        
        // 2. Lo clonamos profundamente para obtener una instancia nueva y limpia para este request.
        const builder = prototype.deepclone();

        if (!builder) {
            throw new Error(`El builder para '${provider}' no pudo ser creado.`);
        }
        
        // El resto del flujo con el Director no cambia en absoluto.
        const vmProduct = VMDirector.construct(builder, provider, vmType, params);
        
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
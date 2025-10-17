const VMDirector = require("../directors/VMDirector");
// 🔽 1. Importa el registro de fábricas
const FactoryRegistry = require("../factories/FactoryRegistry"); 
// 🔽 2. Carga todas las fábricas para que se registren solas
require("../factories/loader"); 

exports.provisionVM = (req, res) => {
    const { provider, vmType, params } = req.body;

    // 🔽 3. Obtén la clase de la fábrica desde el registro
    const Factory = FactoryRegistry.getFactory(provider);
    if (!Factory) {
        return res.status(400).json({ success: false, error: "Proveedor no soportado" });
    }

    try {
        // 🔽 4. Crea una instancia de la fábrica y luego crea el builder
        const factoryInstance = new Factory();
        const builder = factoryInstance.createBuilder(); // Nuevo método que añadiremos

        if (!builder) {
            throw new Error(`El builder para '${provider}' no pudo ser creado.`);
        }
        
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
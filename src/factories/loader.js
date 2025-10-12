const fs = require("fs");
const path = require("path");

const factoriesDir = __dirname;

// Carga automáticamente todos los factories
fs.readdirSync(factoriesDir).forEach(file => {
    if (
        file.endsWith(".js") &&
        file !== "VMFactory.js" &&
        file !== "FactoryRegistry.js" &&
        file !== "loader.js"
    ) {
        require(path.join(factoriesDir, file));
    }
});

// src/factories/loader.js

const fs = require("fs");
const path = require("path");

const factoriesDir = __dirname;

// Carga y ejecuta automáticamente todos los archivos de fábrica
fs.readdirSync(factoriesDir).forEach(file => {
    // Asegúrate de no incluir este mismo archivo, el registro o la clase base
    if (
        file.endsWith("Factory.js") &&
        file !== "VMFactory.js"
    ) {
        require(path.join(factoriesDir, file));
    }
});
const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "../../logs/provision.log");

function logProvision(provider, params, result) {
    const timestamp = new Date().toISOString();

    // Copia de params sin datos sensibles
    const safeParams = { ...params };
    delete safeParams.token;
    delete safeParams.password;

    const logEntry = `[${timestamp}] Provider: ${provider}, Params: ${JSON.stringify(safeParams)}, Result: ${JSON.stringify(result)}\n`;

    fs.appendFileSync(logFile, logEntry, "utf8");
}

module.exports = logProvision;

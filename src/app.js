// src/app.js
const express = require("express");
const app = express();
const provisionRoutes = require("./routes/provisionRoutes");

// Middleware para parsear JSON en requests
app.use(express.json());

// Prefijo para la API
app.use("/api", provisionRoutes);

module.exports = app;

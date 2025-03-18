const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Asegúrate de que coincide con donde corre tu frontend
  },
});

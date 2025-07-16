const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://petstore.octoperf.com/",
    env: {
      ODOO_URL: "https://petstore.octoperf.com/",
      ODOO_USER: "player",
      ODOO_PASSWORD:"matha777",
      env: {
  apiUrl: "https://petstore.octoperf.com/actions"
}


    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

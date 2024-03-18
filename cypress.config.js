const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: 'https://his-qa.zicare.id',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000
  },
});

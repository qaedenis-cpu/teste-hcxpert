const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {

    // Não há arquivos em cypress/support
    supportFile: false,

    // Procura todos os arquivos .feature
    specPattern: "cypress/e2e/features/**/*.feature",

    // URL base do site
    baseUrl: "https://www.automationexercise.com",

    async setupNodeEvents(on, config) {
      return setupNodeEvents(on, config);
    },

  },
});
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "t2a8x2",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
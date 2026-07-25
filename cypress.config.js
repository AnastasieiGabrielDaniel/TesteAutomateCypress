const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mj6fbx',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

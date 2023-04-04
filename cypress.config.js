const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  e2e: {
    defaultBrowser: "chrome",
  },
  video: false,
});

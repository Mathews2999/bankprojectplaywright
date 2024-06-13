// playwright.config.js
const { devices } = require('@playwright/test');

module.exports = {
  testDir: './tests', // Directory where the test files are located
  timeout: 30000, // Maximum time one test can run
  retries: 2, // Retry failed tests
  reporter: [['html', { outputFolder: 'test-results' }]], // Generate HTML report
  use: {
    headless: true, // Run tests in headless mode
    viewport: { width: 1280, height: 720 }, // Default viewport size
    ignoreHTTPSErrors: true, // Ignore HTTPS errors
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] }, // Use desktop Chrome device settings
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] }, // Use desktop Firefox device settings
    },
    {
      name: 'Desktop Safari',
      use: { ...devices['Desktop Safari'] }, // Use desktop Safari device settings
    },
  ],
};
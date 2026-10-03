const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('E2E Home Page Test', () => {
  let driver;

  beforeAll(async () => {
    const options = new chrome.Options();
    options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');

    const seleniumHost = process.env.SELENIUM_HOST || 'localhost';
    
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .usingServer(`http://${seleniumHost}:4444/wd/hub`)
      .build();
  });

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  test('Check header text', async () => {
    const appUrl = process.env.APP_URL || 'http://host.docker.internal:3000';
    await driver.get(appUrl);

    const header = await driver.wait(until.elementLocated(By.tagName('h1')), 10000);
    const text = await header.getText();

    expect(text).toBe('Hello DevOps');
  });
});
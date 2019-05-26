/* eslint-disable import/no-extraneous-dependencies */
import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout
describe('INN/OGRN form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 100,
      // devtools: false, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  test('should add .success class for valid inn', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#form');
    const input = await form.$('#card_number');
    await input.type('5190967013969042');
    const submit = await form.$('#submitform');
    submit.click();
    await page.waitForSelector('#message.success');
  });

  test('should add .alert class for invalid inn', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#form');
    const input = await form.$('#card_number');
    await input.type('5190967013969043');
    const submit = await form.$('#submitform');
    submit.click();
    await page.waitForSelector('#message.alert');
  });
});

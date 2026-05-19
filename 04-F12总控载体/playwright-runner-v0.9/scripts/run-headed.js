// scripts/run-headed.js — F12 Playwright 测试运行器
// node scripts/run-headed.js [--fixture|--smoke|--debug]

const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

const EXT_PATH = path.resolve(__dirname, '../../extension-v0.7');
const FIXTURE_PATH = path.resolve(__dirname, '../fixtures/chatgpt-mock.html');

const args = process.argv.slice(2);
const mode = args.includes('--fixture') ? 'fixture'
  : args.includes('--smoke') ? 'smoke'
  : args.includes('--debug') ? 'debug' : 'fixture';

async function run() {
  console.log(`F12 Playwright Runner v0.9 — Mode: ${mode}`);

  const browser = await chromium.launchPersistentContext('', {
    headless: mode !== 'debug',
    args: [
      `--disable-extensions-except=${EXT_PATH}`,
      `--load-extension=${EXT_PATH}`,
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ],
    viewport: { width: 1280, height: 800 }
  });

  const page = await browser.newPage();

  try {
    if (mode === 'fixture') {
      console.log('Loading fixture page...');
      await page.goto('file://' + FIXTURE_PATH);
    } else {
      console.log('Opening ChatGPT. Please login manually if needed...');
      await page.goto('https://chatgpt.com/');
      console.log('Waiting 10s for manual login...');
      await page.waitForTimeout(10000);
    }

    // Wait for content script injection
    await page.waitForTimeout(2000);

    // Verify worker is loaded
    const hasWorker = await page.evaluate(() => {
      return !!(window.TY_F12_WORKER_V07);
    });
    console.log('Worker loaded:', hasWorker);

    if (!hasWorker) {
      console.error('Content script not loaded. Check manifest host_permissions.');
      process.exit(1);
    }

    // Test adapter functions
    const health = await page.evaluate(() => {
      const w = window.TY_F12_WORKER_V07;
      return w ? w.healthCheck() : null;
    });
    console.log('Health check:', JSON.stringify(health, null, 2));

    console.log('\n=== Fixture test passed ===');
  } catch (e) {
    console.error('Test failed:', e.message);
    // Save screenshot
    const ssDir = path.resolve(__dirname, '../screenshots');
    if (!fs.existsSync(ssDir)) fs.mkdirSync(ssDir, { recursive: true });
    await page.screenshot({ path: path.join(ssDir, 'error-' + Date.now() + '.png') });
    process.exit(1);
  } finally {
    await browser.close();
  }
}

run();

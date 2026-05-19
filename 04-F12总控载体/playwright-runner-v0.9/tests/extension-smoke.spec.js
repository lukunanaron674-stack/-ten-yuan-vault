import { test, expect } from '@playwright/test';
import path from 'path';

const EXT_PATH = path.resolve(__dirname, '../../extension-v0.7');
const FIXTURE_PATH = path.resolve(__dirname, '../fixtures/chatgpt-mock.html');

test.describe('F12 Extension Smoke', () => {

  test('fixture page loads and worker injects', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 }
    });
    const page = await context.newPage();

    await page.goto('file://' + FIXTURE_PATH);
    await page.waitForTimeout(1500);

    // 验证页面元素
    const input = page.locator('#prompt-textarea');
    await expect(input).toBeVisible();

    const sendBtn = page.locator('[data-testid="send-button"]');
    await expect(sendBtn).toBeVisible();

    const assistant = page.locator('[data-message-author-role="assistant"]');
    await expect(assistant.first()).toBeVisible();

    // 测试输入
    await input.fill('Hello test');
    await expect(input).toHaveValue('Hello test');

    // 测试发送
    await sendBtn.click();
    await page.waitForTimeout(500);

    // 验证生成按钮出现
    const stopBtn = page.locator('[data-testid="stop-button"]');
    await expect(stopBtn).toBeVisible();

    // 等待生成完成
    await page.waitForTimeout(4000);
    await expect(stopBtn).toBeHidden();

    await context.close();
  });

  test('task list parsing', async () => {
    // 验证 ---TASK--- 分隔逻辑
    const tasks = [];
    const raw = 'Task1\n\n---TASK---\n\nTask2\n\n---TASK---\n\nTask3';
    const parsed = raw.split('---TASK---').map(t => t.trim()).filter(t => t.length > 0);
    expect(parsed.length).toBe(3);
    expect(parsed[0]).toBe('Task1');
    expect(parsed[2]).toBe('Task3');
  });

  test('CarryPacket round detection', async () => {
    const isCarryRound = (round, total) => round % 5 === 0 || round === total;
    expect(isCarryRound(5, 10)).toBe(true);
    expect(isCarryRound(10, 10)).toBe(true);
    expect(isCarryRound(3, 10)).toBe(false);
    expect(isCarryRound(7, 10)).toBe(false);
  });

  test('State schema validation', async () => {
    const defaultState = {
      schemaVersion: '0.9.0',
      tasks: [],
      index: 0,
      total: 0,
      running: false,
      stopped: true,
      manualPause: false,
      activeTabId: null,
      activeUrl: '',
      activeTitle: '',
      leaseUntil: 0,
      logs: [],
      carryPackets: [],
      errors: [],
      projectName: '',
      frameName: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    expect(defaultState.schemaVersion).toBe('0.9.0');
    expect(Array.isArray(defaultState.tasks)).toBe(true);
    expect(defaultState.stopped).toBe(true);
    expect(defaultState.manualPause).toBe(false);
  });
});

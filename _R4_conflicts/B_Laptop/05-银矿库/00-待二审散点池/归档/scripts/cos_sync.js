#!/usr/bin/env node
/**
 * COS → workspace 同步+自动解压脚本 v2
 * 根目录压缩包 → 自动解压到目标目录
 * 前缀目录 → 直接下载覆盖
 */
const COS = require('/tmp/cos_upload/node_modules/cos-nodejs-sdk-v5');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const cos = new COS({
  SecretId: 'AKID96pNhla6RZWklY6PWUDgutf3B5lDQO9s',
  SecretKey: 'XqyrXzNXS9dx2tWv63nMhy1p8E5lCRRD',
});

const BUCKET = '674-1420714858';
const REGION = 'ap-guangzhou';
const WORKSPACE = '/workspace';
const TEMP = '/workspace/download_page/_sync_temp';

// 根目录压缩包 → 解压目标目录
const ROOT_ARCHIVES = {
  'characters角色包.zip':            `${WORKSPACE}/characters/`,
  '三元理论完整素材包_v2.tar.gz':     `${WORKSPACE}/三元理论/三元理论-整理/`,
  '阿白文件夹.zip':                   `${WORKSPACE}/`,
  'image.png':                        `${WORKSPACE}/user_input_files/`,
};

// 前缀目录映射
const PREFIX_MAPPING = {
  'characters/':      `${WORKSPACE}/characters/`,
  '三元理论/':        `${WORKSPACE}/三元理论/三元理论-整理/`,
  'illustrations/':  `${WORKSPACE}/illustrations/`,
  'imgs/':           `${WORKSPACE}/imgs/`,
  'skills/':         `${WORKSPACE}/skills/`,
  '十元原型库/':     `${WORKSPACE}/十元原型库/`,
  'memory/':         `${WORKSPACE}/memory/`,
  'scripts/':        `${WORKSPACE}/scripts/`,
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function extOf(key) {
  const parts = key.split('.');
  return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : '';
}

function safeUnzip(zipPath, destDir) {
  ensureDir(destDir);
  try {
    execSync(`cd "${destDir}" && unzip -o "${zipPath}"`, { timeout: 600000, stdio: 'pipe' });
    return true;
  } catch(e) {
    console.log(`    unzip err: ${e.message.substring(0, 100)}`);
    return false;
  }
}

function safeTar(tarPath, destDir) {
  ensureDir(destDir);
  try {
    execSync(`cd "${destDir}" && tar -xzf "${tarPath}"`, { timeout: 600000, stdio: 'pipe' });
    return true;
  } catch(e) {
    console.log(`    tar err: ${e.message.substring(0, 100)}`);
    return false;
  }
}

function downloadToFile(key, localPath) {
  return new Promise((resolve) => {
    ensureDir(path.dirname(localPath));
    cos.getObject({
      Bucket: BUCKET, Region: REGION, Key: key,
      Output: fs.createWriteStream(localPath),
    }, (err) => {
      if (err) { console.log(`  ✗ ${key}: ${err.message}`); resolve(false); return; }
      console.log(`  ✓ ${key} → ${localPath}`);
      resolve(true);
    });
  });
}

async function processKey(key) {
  // 根目录特殊处理
  if (ROOT_ARCHIVES[key] !== undefined) {
    const dest = ROOT_ARCHIVES[key];
    const tmpPath = path.join(TEMP, path.basename(key));
    ensureDir(TEMP);

    await new Promise((resolve) => {
      cos.getObject({
        Bucket: BUCKET, Region: REGION, Key: key,
        Output: fs.createWriteStream(tmpPath),
      }, (err) => {
        if (err) { console.log(`  ✗ ${key}: ${err.message}`); resolve(false); return; }
        console.log(`  ✓ ${key} → ${tmpPath}`);
        const ext = extOf(key);
        if (ext === 'zip') {
          console.log(`    → unzip → ${dest}`);
          safeUnzip(tmpPath, dest);
          try { fs.unlinkSync(tmpPath); } catch(e) {}
        } else if (ext === 'gz' || key.endsWith('.tar.gz') || key.endsWith('.tgz')) {
          console.log(`    → tar -xzf → ${dest}`);
          safeTar(tmpPath, dest);
          try { fs.unlinkSync(tmpPath); } catch(e) {}
        } else {
          // 非压缩文件，直接移动到目标目录
          const destFile = path.join(dest, path.basename(key));
          try {
            if (fs.existsSync(destFile)) fs.unlinkSync(destFile);
            fs.renameSync(tmpPath, destFile);
            console.log(`    → 保存为 ${destFile}`);
          } catch(e) {
            console.log(`    → 移动失败: ${e.message}`);
          }
        }
        resolve(true);
      });
    });
    return;
  }

  // 前缀目录映射
  for (const [prefix, targetDir] of Object.entries(PREFIX_MAPPING)) {
    if (key.startsWith(prefix)) {
      const relative = key.slice(prefix.length);
      if (!relative) continue;
      const localPath = path.join(targetDir, relative);
      await downloadToFile(key, localPath);
      return;
    }
  }

  console.log(`  - ${key} (无映射，跳过)`);
}

async function main() {
  const start = Date.now();
  console.log(`\n[COS Sync v2] ${new Date().toISOString()}`);
  console.log('='.repeat(50));
  ensureDir(TEMP);

  const list = await new Promise((resolve) => {
    cos.getBucket({ Bucket: BUCKET, Region: REGION }, (err, data) => {
      if (err) { console.error('列出失败:', err.message); resolve([]); }
      else resolve(data.Contents || []);
    });
  });

  console.log(`COS: ${list.length} 个文件\n`);
  for (const obj of list) {
    await processKey(obj.Key);
  }

  const t = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n=${'='.repeat(50)}=`);
  console.log(`完成 耗时 ${t}s`);
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });

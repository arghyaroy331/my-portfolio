const fs = require('fs');
const path = require('path');

const chunksDir = path.join(__dirname, '..', '.next', 'server', 'chunks');
const serverDir = path.join(__dirname, '..', '.next', 'server');

if (fs.existsSync(chunksDir)) {
  const files = fs.readdirSync(chunksDir);
  let count = 0;
  files.forEach(f => {
    const src = path.join(chunksDir, f);
    const dest = path.join(serverDir, f);
    if (fs.statSync(src).isFile()) {
      fs.copyFileSync(src, dest);
      count++;
    }
  });
  console.log(`[fix-chunks] Copied ${count} chunk files to .next/server`);
}


const fs = require('fs');
const path = require('path');

try {
  const vitePath = path.join(process.cwd(), 'node_modules', '.bin', 'vite');
  if (fs.existsSync(vitePath)) {
    fs.chmodSync(vitePath, '755');
    console.log('✅ Vite permissions fixed');
  }
} catch (error) {
  console.log('⚠️ Could not fix vite permissions:', error.message);
}

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Fix permissions for vite binary
  const vitePath = path.join(process.cwd(), 'node_modules', '.bin', 'vite');
  if (fs.existsSync(vitePath)) {
    fs.chmodSync(vitePath, '755');
  }
  
  // Run the build
  execSync('npx vite build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

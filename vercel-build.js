const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Vercel build...');

try {
  // Fix permissions for vite binary
  const vitePath = path.join(process.cwd(), 'node_modules', '.bin', 'vite');
  if (fs.existsSync(vitePath)) {
    fs.chmodSync(vitePath, '755');
    console.log('✅ Fixed vite permissions');
  } else {
    console.log('⚠️ Vite binary not found');
  }
  
  // Run the build using npx
  console.log('📦 Running build...');
  execSync('npx vite build', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

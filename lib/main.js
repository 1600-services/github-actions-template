// lib/main.js

const { execSync } = require('child_process');

// Ejecuta tu script deploy.sh
execSync('bash ../scripts/deploy.sh', { stdio: 'inherit' });

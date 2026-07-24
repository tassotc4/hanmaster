import { execSync } from 'child_process';
execSync('npx tailwindcss -i ./public/css/tailwind-input.css -o ./public/css/tailwind.css --minify', { stdio: 'inherit' });
console.log('Build complete');

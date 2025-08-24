#!/bin/bash
set -e

# Fix permissions for vite binary
chmod +x node_modules/.bin/vite

# Run the build
npm run build

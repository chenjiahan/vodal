#!/bin/sh
cp src/style/* ./
npm run build
npm publish
node build/del.js

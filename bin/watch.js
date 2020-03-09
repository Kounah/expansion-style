#!/usr/bin/env node

const sass = require('node-sass');
const path = require('path');
const fs = require('fs');

const srcPath = path.join(__dirname, '../src');
const distPath = path.join(__dirname, '../dist/style.css');

console.log('Started Watching', srcPath);
fs.watch(srcPath, {
  recursive: true
}).addListener('change', (type, file) => {
  try {
    fs.writeFileSync(distPath, sass.renderSync({
      file: path.join(srcPath, 'index.scss')
    }).css);

    console.log('successfully compiled SASS');
  } catch(err) {
    console.error('failed to compile SASS', err);
  }
});
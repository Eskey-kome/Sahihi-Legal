const fs = require('fs');
const path = require('path');

const patterns = [
  'esmurimi@gmail.com',
  'ekome61933@anu.ac.ke',
  '254737776749',
  '0737 776 749',
];

const exts = ['.tsx', '.ts', '.jsx', '.js'];
let foundAny = false;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next') continue;
      walk(fullPath);
    } else if (exts.includes(path.extname(entry.name))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      for (const pattern of patterns) {
        if (content.includes(pattern)) {
          console.log(`FOUND "${pattern}" in ${fullPath}`);
          foundAny = true;
        }
      }
    }
  }
}

walk('./app');

if (!foundAny) console.log('No old contact details found. Clean!');
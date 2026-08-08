const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const fm = JSON.parse(fs.readFileSync('node_modules/framer-motion/package.json', 'utf8'));
pkg.dependencies['framer-motion'] = '^' + fm.version;
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
console.log('Added framer-motion', fm.version);

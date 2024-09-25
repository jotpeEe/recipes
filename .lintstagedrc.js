const path = require('path');

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildPrettierCommand = filenames =>
  `prettier --write ${filenames.map(f => path.relative(process.cwd(), f)).join(' ')}`;

const setup = () => `cp .eslintrc.commit.cjs .eslintrc.cjs`;
const cleanup = () => `cp .eslintrc.local.cjs .eslintrc.cjs`;

module.exports = {
  '*.{js,mjs,jsx,json,md,yaml,css}': [buildPrettierCommand],
  '*.{js,mjs,jsx,ts,tsx}': [setup, buildEslintCommand, cleanup],
};

const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const url = require('@rollup/plugin-url');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');

module.exports = {
  input: 'src/index.ts',   // Or your entry file
  output: {
    file: 'dist/common.js',
    format: 'cjs'
  },
  plugins: [
    commonjs(),
    json(),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json', '.node', '.ts', '.tsx'], // add .ts and .tsx here
    }),
    url({
      limit: 10000,
      include: ['**/*.woff', '**/*.woff2', '**/*.png'], 
      destDir: 'dist'
    }),
    typescript(),  // use the TypeScript plugin
  ]
};

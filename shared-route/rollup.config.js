import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import scss from 'rollup-plugin-scss';
import { uglify } from 'rollup-plugin-uglify';
import progress from 'rollup-plugin-progress';
import filesize from 'rollup-plugin-filesize';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/scripts.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'runtime', plugins: ["@babel/plugin-transform-runtime"] }),
    image(),
    scss({
      output: 'dist/style.css',
    }),
    uglify(),
    progress(),
    filesize(),
    sizeSnapshot(),
    dynamicImportVars(),
    injectProcessEnv({
      NODE_ENV: process.env.NODE_ENV,
   }),
  ],
  inlineDynamicImports: true,
};

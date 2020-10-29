import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import { uglify } from 'rollup-plugin-uglify';
import progress from 'rollup-plugin-progress';
import filesize from 'rollup-plugin-filesize';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

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
    scss({
      output: 'dist/style.css',
    }),
    uglify(),
    progress(),
    filesize(),
    sizeSnapshot(),
  ],
};

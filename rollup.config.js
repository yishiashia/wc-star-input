import eslint from '@rollup/plugin-eslint'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import { terser } from "rollup-plugin-terser"

import autoprefixer from 'autoprefixer'
import postcssNested from 'postcss-nested'
import postcssImportUrl from 'postcss-import-url'

const plugins = [
  eslint({
    fix: true,
    throwOnError: true,
    throwOnWarning: true,
    include: ['src/**'],
    exclude: ['node_modules/**', './src/scss/**', './src/css/**', './src/*.scss']
  }),
  scss({
    processor: () => postcss([
      postcssImportUrl({resolveUrls: true}),
      autoprefixer(),
      postcssNested()
    ]),
    output: false,
    outputStyle: "compressed"
  }),
  replace({
    preventAssignment: true,
    delimiters: ['{{', '}}'],
    DEVELOPMENT: process.env.NODE_ENV
  }),
  nodeResolve({
    preferBuiltins: false
  }),
  babel({
    babelHelpers: 'runtime',
    exclude: [
      /\/core-js\//
    ]
  }),
  terser(),
]

export default [
  {
    input: 'index.js',
    output: {
      file: 'dist/star-input.js',
      format: 'umd',
      name: 'StarInput',
      inlineDynamicImports: true
    },
    plugins: plugins
  }
]
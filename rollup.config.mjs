import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'
import { readFileSync } from 'node:fs'
import copy from 'rollup-plugin-copy'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))

const extensions = ['.js', '.jsx', '.ts', '.tsx']
const external = ['react', 'react-dom', 'react-router-dom']

export default {
  input: './src/components/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
    },
  ],
  plugins: [
    resolve({
      extensions,
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    image(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    copy({
      targets: [
        {
          src: 'src/assets/scss',
          dest: 'dist',
        },
      ],
    }),
    commonjs(),
    terser(),
  ],
  external,
}

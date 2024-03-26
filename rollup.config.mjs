import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser';

const config = {
  external: [/@babel\/runtime/, 'classnames/bind'],
  input: 'lib/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: './dist/index.es.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      inject: true
    }),
    typescript(),
    nodeResolve(),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: 'node_modules/**'
    }),
    commonjs({ include: 'node_modules/**' }),
    terser(),
  ],
};

export default config;

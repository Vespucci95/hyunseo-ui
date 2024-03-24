import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const config = {
  external: [/@babel\/runtime/],
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
    typescript(),
    nodeResolve(),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: 'node_modules/**'
    }),
    terser(),
  ],
};

export default config;
/**
 *  (plugin babel) RollupError: [plugin babel] lib/index.ts: You have declared using "runtime" babelHelpers, but transforming /Users/leehyunseo/repository/openSource/@hyunseo/ui/lib/index.ts resulted in "inline". Please check your configuration.
 */

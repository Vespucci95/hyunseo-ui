import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from '@rollup/plugin-terser';

const config = {
  external: [/.yarn/],
  input: 'lib/index.ts',
  output: [
    // {
    //   dir: './dist',
    //   format: 'es',
    //   preserveModules: true,
    //   preserveModulesRoot: 'lib',
    // },
    {
      file: './dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: './dist/index.es.js',
      format: 'es',
      sourcemap: true,
    }
  ],
  plugins: [
    peerDepsExternal(),
    typescript(),
    nodeResolve(),
    babel({ extensions: ['.js', '.jsx', '.ts', '.tsx']}),
    terser()
  ],
};

export default config;

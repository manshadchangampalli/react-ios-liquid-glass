import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
const packageJsonFile = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJsonFile.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJsonFile.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      commonjs(),
      terser(),
      postcss({
        extract: true,
        inject: true,
        minimize: true,
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: packageJsonFile.types,
    plugins: [dts.default()],
    external: [/\.css/],
  },
];

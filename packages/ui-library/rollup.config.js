import babel from "@rollup/plugin-babel";
import multiInput from "rollup-plugin-multi-input";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import del from "rollup-plugin-delete";
import pkg from "./package.json";

export default {
  input: ["lib/**/*.{js,jsx}"],
  output: [
    {
      format: "esm",
      dir: "dist/esm",
    },
    {
      format: "cjs",
      dir: "dist/cjs",
    },
  ],
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),

    commonjs(),
    multiInput({
      relative: "lib/",
    }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};

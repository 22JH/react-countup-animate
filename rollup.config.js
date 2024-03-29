import commonjs from "@rollup/plugin-commonjs";
import reslove from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      reslove(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extensions: [".css", ".scss"], // 처리할 파일 확장자
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];

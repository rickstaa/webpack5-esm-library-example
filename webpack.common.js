import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: "./src/index.ts",
  target: ["web", "es2020"],
  output: {
    module: true,
    library: { type: "module" },
    path: path.resolve(__dirname, "dist"),
    filename: "webpack5-esm-library-example.bundle.mjs",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: { react: "react" },
  experiments: {
    outputModule: true,
  },
};

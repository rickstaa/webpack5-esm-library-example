import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: "./src/index.js",
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  externals: { react: "react", lodash: "lodash", "lodash-es": "lodash-es" },
  experiments: {
    outputModule: true,
  },
};

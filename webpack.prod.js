import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [new BundleAnalyzerPlugin()],
});

const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const webpack = require("webpack");

module.exports = {
    devServer: {
      https: false
    },
    chainWebpack: (config) => {
      // rust wasm bindgen https://github.com/rustwasm/wasm-bindgen
      config
        .plugin("wasm-pack")
        .use(WasmPackPlugin)
        .init(
          (Plugin) =>
            new Plugin({
              crateDirectory: path.resolve(__dirname, "./src/wasm"),
            })
        )
        .end()
        //  needed for Edge browser https://rustwasm.github.io/docs/wasm-bindgen/examples/hello-world.html
        .plugin("text-encoder")
        .use(webpack.ProvidePlugin)
        .init(
          (Plugin) =>
            new Plugin({
              TextDecoder: ["text-encoding", "TextDecoder"],
              TextEncoder: ["text-encoding", "TextEncoder"],
            })
        )
        .end();
    }
}
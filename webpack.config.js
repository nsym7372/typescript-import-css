const path = require("path")

module.exports = {
    entry: "./src/app",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "@teamsupercell/typings-for-css-modules-loader",
                    {
                        loader: "css-loader",
                        options: { modules: true }
                    }
                ]
              }
        ]
    },
    resolve:{
        extensions:[".ts", ".css"]
    }
}
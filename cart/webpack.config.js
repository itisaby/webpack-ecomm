const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    // mode: 'production',
    devServer:{
        port: 8003
        // contentBase: path.join(__dirname, 'dist'),
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename:'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap',
            },
            shared: {
                faker: {
                    singleton: true,
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ]
};

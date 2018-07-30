const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')

environment.loaders.append('typescript', typescript)
environment.loaders.append('html', {
    test: /\.html$/,
    exclude: /node_modules/,
    loaders: ['html-loader']
})

environment.loaders.insert('sass', {
    test: /\.scss$/,
    use: [
        "to-string-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS
    ]
});

module.exports = environment

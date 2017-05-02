// postcss processors
const processors = [
    require('postcss-import'),             // combine imports into one file
    require('precss')                      // enables precss syntax support
    //require('postcss-custom-properties'),   // replace variables by their calculated values
    //require('postcss-color-function'),      // replaces color functions with rgba values
    //require('postcss-color-rgba-fallback'), // adds a hex value before every rgba value
    //require('pixrem'),                      // adds pixel fallback before every rem value
    //require('postcss-calc'),                // pre-calculcates calc functions where possible
    //require('autoprefixer')                 // vendor prefix for older browsers
    //require('postcss-cssnext')            // cssnext support
];

if (process.env.NODE_ENV === 'production') {
    processors.push(require('cssnano'));    // minify css
}


module.exports = {
    plugins: processors
};
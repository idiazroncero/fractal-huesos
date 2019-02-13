'use strict';

const mandelbrot = require('@frctl/mandelbrot');

/*
 * Configure the theme
 */
const huesos = mandelbrot({
    styles: [
        'default', 
        '/_subtheme/huesos.css'
    ] // link to the default stylesheet followed by a custom one
});

/*
 * Specify a template directory to override any view templates
 */
huesos.addLoadPath(__dirname + '/views');

/*
 * Specify the static assets directory that contains the custom stylesheet.
 */
huesos.addStatic(__dirname + '/assets', '_subtheme');

/*
 * Export the customised theme instance so it can be used in Fractal projects
 */
module.exports = huesos;

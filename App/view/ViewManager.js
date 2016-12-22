"use strict";

const fs = require('fs');
const handlebars = require('handlebars');

//COMPONENTS
handlebars.registerPartial('head', fs.readFileSync('./view/components/head.hbs').toString());
handlebars.registerPartial('footer', fs.readFileSync('./view/components/footer.hbs').toString());

module.exports.css = fs.readFileSync('./view/components/bootstrap.min.css').toString();

//PAGES
module.exports.home = handlebars.compile(fs.readFileSync('./view/home.hbs').toString());


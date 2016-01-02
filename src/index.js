'use strict';
var $ =  require('jquery');

var wdqsExplorer = require('./wdqsExplorer.js');
var Explorer = require('./Explorer.js');

function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var item = 'https://www.wikidata.org/entity/Q' + getRandomId(1,18000000);

$( document ).ready( function () {
    new Explorer( wdqsExplorer, item );
} );


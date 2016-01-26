'use strict';
var $ =  require('jquery');
var url = require('wurl');

var wdqsExplorer = require('./wdqsExplorer.js');
var Explorer = require('./Explorer.js');

function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (url('?id')) {
    var item = 'https://www.wikidata.org/entity/' + url('?id');
} else {
    item = 'https://www.wikidata.org/entity/Q' + getRandomId(1, 18000000);
}

$( document ).ready( function () {
    new Explorer( wdqsExplorer, item );
} );


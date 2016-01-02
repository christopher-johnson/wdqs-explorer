"use strict";
module.exports = Explorer;

function Explorer( wdqsExplorer, item) {
    this._Vis = require('vis');
    this._Explorer = wdqsExplorer;
    this._handleExploreItem(item);
}

Explorer.prototype._handleExploreEvent = function( event ) {
    this._handleExploreItem(item);
};

Explorer.prototype._handleExploreItem = function( item ) {
    var explorerSelector = $( '.explorer' );
    explorerSelector.empty( '' );
    $( '.explorer-panel' ).show();

    var id = item.substring(item.lastIndexOf('/') + 1);
    this._Vis.config = { get: function () {
        return id;
    } };
    new this._Explorer( $, this._Vis, explorerSelector, this._Vis.config.get('wgWikibaseItemId') );
};
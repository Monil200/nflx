var eventEmitter = require('events').EventEmitter;
var util = require('util');
var map = require('./searchSuggestions.json');

var search = function(query) {
    this.query = query;
}

util.inherits(search, eventEmitter);

var searchAssistObj = new search("h");

searchAssistObj.on('typeInSearchBox', function(subQuery) {
    var assistTray = [];
    for(var key in map[subQuery].suggestions) {
        assistTray.push(map[subQuery].suggestions[key]);
    }
    console.log(assistTray);
})

searchAssistObj.emit("typeInSearchBox", "f");

console.log(Object.prototype);




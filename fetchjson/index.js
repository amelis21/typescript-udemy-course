"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    // response.data has properties of:
    // id
    // title
    // completed
    var todo = response.data;
    var ID = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    console.log("\n    The Todo with ID: " + ID + "\n    Has a title of: " + title + "\n    Is it finished? " + finished + "\n  ");
});

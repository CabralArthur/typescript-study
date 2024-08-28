"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/posts/1';
axios_1.default.get(url).then(function (response) {
    var post = response.data;
    var id = post.id;
    var title = post.title;
    logPost(id, title);
});
var logPost = function (id, title) {
    console.log("\n        The post with id: ".concat(id, "\n        has a title of: ").concat(title, "\n    "));
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exercise_like_module_1 = require("./exercise_like_module");
console.log("here");
var like = new exercise_like_module_1.Like(false, 1);
like.press(); // true,2
like.press(); //false,1
like.press(); // true,2
like.press(); //false,1
console.log("like count , " + like.likeCount);
console.log("like status , " + like.likeState);

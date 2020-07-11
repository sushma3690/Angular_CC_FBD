"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(_likeState, _likeCount) {
        this._likeState = _likeState;
        this._likeCount = _likeCount;
        console.log(" initied post with like as ", this._likeState);
        console.log(" and count as ", this._likeCount);
    }
    Object.defineProperty(Like.prototype, "likeCount", {
        get: function () {
            return this._likeCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "likeState", {
        // set likeCount(value){
        //      this._likeCount = value;
        //}
        get: function () {
            return this._likeState;
        },
        enumerable: false,
        configurable: true
    });
    /*  set likeCount(value){
          this._likeCount = value;
     } */
    Like.prototype.press = function () {
        if (!this._likeState) {
            this._likeCount++;
            this._likeState = true;
            console.log("liked the post and current count is ", this._likeCount);
        }
        else {
            this._likeCount--;
            this._likeState = false;
            console.log("unliked the post and current count is ", this._likeCount);
        }
    };
    return Like;
}());
exports.Like = Like;

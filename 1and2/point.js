"use strict";
exports.__esModule = true;
exports.Point62 = void 0;
var Point62 = /** @class */ (function () {
    // x:number;
    // y:number;
    // private z:number;
    /* constructor(x:number, y:number, z:number){
         this.x=x;
         this.y=y;
         this.z=z;
     }*/ //errors from 258-64 cos of this
    function Point62(_x, y, z) {
        this._x = _x;
        this.y = y;
        this.z = z;
        //this.x=x;
        //this.y=y;
        //this.z=z;
    }
    Point62.prototype.drawPoint = function () {
        console.log("draw point methid");
        console.log(this._x);
        console.log(this.y);
    }; // neednt give x, y because it knows they r there in
    // its scope n takes it
    Point62.prototype.findDistance = function (another) {
        console.log("find distance methid");
    };
    Object.defineProperty(Point62.prototype, "Z", {
        get: function () {
            return this.z;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('cant be less than 0');
            }
            this.z = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point62.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('cant be less than 0');
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point62;
}());
exports.Point62 = Point62;

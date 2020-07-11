"use strict";
exports.__esModule = true;
function log(message) {
    console.log(message);
}
log("Hellow World!");
var count = 5;
count = 'A'; // compilation error but still went ahead and convertd to JS
/*
compilation error like below:
main.ts:8:1 - error TS2322: Type '"A"' is not assignable to type 'number'.

8 count = 'A'; // compilation error but still went ahead and convertd to JS
  ~~~~~


Found 1 error.

when you do node main.js:: it still prints out A despite the compilation issue
- good way to catch issues before hand though it doesnts stop u from
goig ahead with execution


*/
console.log("count  ", count);
var b;
b = 1;
b = 'b';
b = true; // basically allows any
console.log(b);
var a;
var z;
var c;
var d;
var e;
var f;
a = 3;
z = true;
c = 'a';
d = 1;
d = true;
e = [1, 2, 3, 4];
f = [1, 'a', true];
var colorRed = 0;
var colorBlue = 1; // naive way to assign a value to a number for enum like
// simulation
var Color;
(function (Color) {
    Color[Color["Purple"] = 4] = "Purple";
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {})); // starts from 0;
console.log(Color.Red); // prints 0
console.log(Color.Purple); // prints 4
/***
 * enum Color {Purple,Red, Blue, Green} // starts from 0;
console.log(Color.Red) // prints 1, so to maintain  consistency add
enum numbers next to the Color.
 */
//Type Assertions::
var message1;
message1 = "abc";
var isEndsWithC1 = message1.endsWith('c'); // ide shows suggestions since 
//message is delcared as a string
console.log("isEndsWithC1 ", isEndsWithC1);
//let message2;
//message2 = 'abc';
//let isEndsWithC2 = message1.// ide shows suggestions since latest TS
//message is delcared as a string
//console.log(isEndsWithC2)
var message2;
message2 = "abc";
var isEndsWithC2 = message2.endsWith('c'); // ide shows suggestions since 
//message is delcared as a string
console.log("isEndsWithC2 ", isEndsWithC2);
var message3;
message3 = "abc";
var isEndsWithC3 = message3.endsWith('c'); // ide shows suggestions since 
//message is delcared as a string
console.log("isEndsWithC3 ", isEndsWithC3);
//Arrow functions
var log2 = function (message) {
    console.log(message);
};
log2("log");
var log1 = function (message) { return console.log(message); };
log1("log1");
var drawPoint = function (x, y) { console.log(x); console.log(y); };
drawPoint(1, 2);
var drawPoint1 = function (x, y, z, a, b, c) {
    console.log('one');
    console.log(x);
    console.log(y);
    console.log(c);
};
drawPoint1(1, 2, 3, 4, 5, 6);
var drawPoint2 = function (point) {
    console.log('two');
    console.log(point.x);
    console.log(typeof point.y);
    // expecting y 2 be a string but gave number; no type assrtion hence
    //need a structure like inteface
};
drawPoint2({ x: 1, y: 2 });
var drawPoint3 = function (point) {
    console.log('three');
    console.log(point.x);
    console.log(point.y);
    // expecting y 2 be a string but gave number; no type assrtion hence
    //need a structure like inteface
};
drawPoint3({ x: 1, y: 2 });
///drawPoint3({x:1,y:'a'}); - Type 'string' is not assignable to type 'number'.
var drawPoint4 = function (point) {
    console.log('four');
    console.log(point.x);
    console.log(point.y);
    // expecting y 2 be a string but gave number; no type assrtion hence
    //need a structure like inteface
};
drawPoint4({ x: 1, y: 2 });
var drawPoint5 = function (point) {
    console.log('five');
    console.log(point.x);
    console.log(point.y);
    // expecting y 2 be a string but gave number; no type assrtion hence
    //need a structure like inteface
};
//drawPoint5({x:1,y:2}); - Type 'number' is not assignable to type 'string'.
drawPoint5({ x: 1, y: 'a' });
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    Point2.prototype.drawPoint = function () {
        console.log("draw point methid");
        console.log(this.x);
        console.log(this.y);
    }; // neednt give x, y because it knows they r there in
    // its scope n takes it
    Point2.prototype.findDistance = function (another) {
        console.log("find distance methid");
    };
    return Point2;
}());
/*let point: Point2;
point.drawPoint();
point.drawPoint();
      ^

TypeError: Cannot read property 'drawPoint' of undefined
    at Object.<anonymous> (C:\Users\karsushm\Desktop\Angular_CC_FBD\ts-hello\main.js:143:7)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)

because we have to allocate memory for custom objs unlike primitive or
predefined which ang takes care of
*/
var point = new Point2();
point.drawPoint();
//point.findDistance();
var point1 = new Point2();
point1.x = 1;
point1.y = 2;
point1.drawPoint();
var Point3 = /** @class */ (function () {
    function Point3() {
    }
    Point3.prototype.drawPoint = function () {
        console.log("draw point methid");
        console.log(this.x);
        console.log(this.y);
    }; // neednt give x, y because it knows they r there in
    // its scope n takes it
    Point3.prototype.findDistance = function (another) {
        console.log("find distance methid");
    };
    return Point3;
}());
var point3 = new Point3();
point3.x;
point3.y;
//point3.z; point3.a -> more params; more lines like this; not efficient
// so construcyr
var Point4 = /** @class */ (function () {
    /* constructor(x:number, y:number, z:number){
         this.x=x;
         this.y=y;
         this.z=z;
     }*/ //errors from 258-64 cos of this
    function Point4(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Point4.prototype.drawPoint = function () {
        console.log("draw point methid");
        console.log(this.x);
        console.log(this.y);
    }; // neednt give x, y because it knows they r there in
    // its scope n takes it
    Point4.prototype.findDistance = function (another) {
        console.log("find distance methid");
    };
    return Point4;
}());
/*let point4= new Point4(); //main.ts(232, 17): An argument for 'x' was not provided.
Peek Problem (Alt+F8)
No quick fixes available*/
/*let point4= new Point4(1);
constructor Point4(x: number, y: number, z: number): Point4
Expected 3 arguments, but got 1.ts(2554)
main.ts(232, 27): An argument for 'y' was not provided.
SO MAKE ALL PARAMS OPTIONAL BY ADDING ? in constructr

*/
var point4 = new Point4(); // allowed
point4.drawPoint();
var point41 = new Point4(1); // allowed
console.log("=====");
point41.drawPoint();
var point42 = new Point4(1, 2); // allowed
console.log("=====");
point42.drawPoint();
var point43 = new Point4(1, 2, 3); // allowed
console.log("=====");
point43.drawPoint();
var point44 = new Point4(1, 2, 3); // allowed
point44.x = 4; //printed this instead of 1
point44.y = 5; //printed this instead of 2
//point44.z=6; //Property 'z' is private and only accessible within class 'Point4'.ts(2341)
console.log("=====");
point44.drawPoint();
var Point5 = /** @class */ (function () {
    // x:number;
    // y:number;
    // private z:number;
    /* constructor(x:number, y:number, z:number){
         this.x=x;
         this.y=y;
         this.z=z;
     }*/ //errors from 258-64 cos of this
    function Point5(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        //this.x=x;
        //this.y=y;
        //this.z=z;
    }
    Point5.prototype.drawPoint = function () {
        console.log("draw point methid");
        console.log(this.x);
        console.log(this.y);
    }; // neednt give x, y because it knows they r there in
    // its scope n takes it
    Point5.prototype.findDistance = function (another) {
        console.log("find distance methid");
    };
    return Point5;
}());
var point5 = new Point5(1, 2, 3); // allowed
point5.x = 4; //printed this instead of 1
point5.y = 5; //printed this instead of 2
//point44.z=6; //Property 'z' is private and only accessible within class 'Point4'.ts(2341)
console.log("=====");
point5.drawPoint(); //works same as above
var Point6 = /** @class */ (function () {
    // x:number;
    // y:number;
    // private z:number;
    /* constructor(x:number, y:number, z:number){
         this.x=x;
         this.y=y;
         this.z=z;
     }*/ //errors from 258-64 cos of this
    function Point6(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        //this.x=x;
        //this.y=y;
        //this.z=z;
    }
    Point6.prototype.drawPoint = function () {
        console.log("draw point methid");
        console.log(this.x);
        console.log(this.y);
    }; // neednt give x, y because it knows they r there in
    // its scope n takes it
    Point6.prototype.findDistance = function (another) {
        console.log("find distance methid");
    };
    Point6.prototype.getZ = function () {
        return this.z;
    };
    Point6.prototype.setZ = function (value) {
        if (value < 0) {
            throw new Error('cant be less than 0');
        }
        this.z = value;
    };
    return Point6;
}());
var point6 = new Point6(1, 2, 3); // allowed
point6.x = 4; //printed this instead of 1
point6.y = 5; //printed this instead of 2
//point44.z=6; //Property 'z' is private and only accessible within class 'Point4'.ts(2341)
console.log("value of z from getter", point6.getZ());
console.log("set value of z from setter");
point6.setZ(1);
console.log("value of z again from getter", point6.getZ());
console.log("===== 6 end");
point6.drawPoint(); //works same as above
var Point61 = /** @class */ (function () {
    // x:number;
    // y:number;
    // private z:number;
    /* constructor(x:number, y:number, z:number){
         this.x=x;
         this.y=y;
         this.z=z;
     }*/ //errors from 258-64 cos of this
    function Point61(_x, y, z) {
        this._x = _x;
        this.y = y;
        this.z = z;
        //this.x=x;
        //this.y=y;
        //this.z=z;
    }
    Point61.prototype.drawPoint = function () {
        console.log("draw point methid");
        console.log(this._x);
        console.log(this.y);
    }; // neednt give x, y because it knows they r there in
    // its scope n takes it
    Point61.prototype.findDistance = function (another) {
        console.log("find distance methid");
    };
    Object.defineProperty(Point61.prototype, "Z", {
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
    Object.defineProperty(Point61.prototype, "x", {
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
    return Point61;
}());
var point61 = new Point61(1, 2, 3); // allowed
point61.x = 7; //printed this instead of 1
point61.y = 5; //printed this instead of 2
//point44.z=6; //Property 'z' is private and only accessible within class 'Point4'.ts(2341)
console.log("value of z from getter", point61.Z); //using lyk normal x,y,z
console.log("set value of z from setter");
point61.Z = 1;
console.log("value of z again from getter", point61.Z);
console.log("===== 61 end");
point61.drawPoint(); //works same as above
var point_1 = require("./point"); //angular modules @angular/core
var point62 = new point_1.Point62(4, 5, 6);
console.log("===== 62  start");
point62.drawPoint();
console.log("===== 62  end");

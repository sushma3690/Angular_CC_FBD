function log(message){
    console.log(message);
}

log("Hellow World!");

let count = 5;
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
console.log("count  ",count);

let b;
b = 1;
b = 'b';
b = true // basically allows any

console.log(b);

let a: number;
let z: boolean;
let c: string;
let d: any;
let e: number[];
let f: any[];

a=3;
z=true;
c='a';
d=1;
d=true
e=[1,2,3,4]
f=[1,'a',true]

const colorRed=0;
const colorBlue=1; // naive way to assign a value to a number for enum like
// simulation

enum Color {Purple=4,Red=0, Blue=1, Green=2} // starts from 0;
console.log(Color.Red) // prints 0
console.log(Color.Purple) // prints 4

/***
 * enum Color {Purple,Red, Blue, Green} // starts from 0;
console.log(Color.Red) // prints 1, so to maintain  consistency add
enum numbers next to the Color.
 */

 //Type Assertions::

 let message1:string;
 message1 = "abc";
 let isEndsWithC1 = message1.endsWith('c'); // ide shows suggestions since 
 //message is delcared as a string
 console.log("isEndsWithC1 ",isEndsWithC1);

 //let message2;
 //message2 = 'abc';
 //let isEndsWithC2 = message1.// ide shows suggestions since latest TS
 //message is delcared as a string
 //console.log(isEndsWithC2)

 let message2;
 message2 = "abc";
 let isEndsWithC2 = (<string>message2).endsWith('c'); // ide shows suggestions since 
 //message is delcared as a string
 console.log("isEndsWithC2 ",isEndsWithC2);

 let message3;
 message3 = "abc";
 let isEndsWithC3 = (message3 as string).endsWith('c'); // ide shows suggestions since 
 //message is delcared as a string
 console.log("isEndsWithC3 ",isEndsWithC3)

 //Arrow functions

 let log2 = function(message){
     console.log(message)
 }

 log2("log");

 let log1 = (message) => console.log(message);

 log1("log1");



let drawPoint = (x,y) => {console.log(x); console.log(y);}
drawPoint(1,2);

let drawPoint1 = (x,y,z,a,b,c) => {console.log('one'); console.log(x); console.log(y);
console.log(c)}
drawPoint1(1,2,3,4,5,6);

let drawPoint2 = (point) => {console.log('two');console.log(point.x); console.log(typeof point.y);
   // expecting y 2 be a string but gave number; no type assrtion hence
   //need a structure like inteface
}
    drawPoint2({x:1,y:2});

let drawPoint3 = (point:{x:number,y:number}) => {
    console.log('three');console.log(point.x); console.log(point.y);
        // expecting y 2 be a string but gave number; no type assrtion hence
        //need a structure like inteface
     }
 drawPoint3({x:1,y:2});
 ///drawPoint3({x:1,y:'a'}); - Type 'string' is not assignable to type 'number'.


let drawPoint4 = (point:{x:number,y:number}) => {
    console.log('four');console.log(point.x); console.log(point.y);
            // expecting y 2 be a string but gave number; no type assrtion hence
            //need a structure like inteface
         }
drawPoint4({x:1,y:2});

//above not feasible if more vars

interface Point{
    x:number;
    y:string;
}

let drawPoint5 = (point:Point) => {
    console.log('five');console.log(point.x); console.log(point.y);
    // expecting y 2 be a string but gave number; no type assrtion hence
    //need a structure like inteface
 }
//drawPoint5({x:1,y:2}); - Type 'number' is not assignable to type 'string'.

drawPoint5({x:1,y:'a'});     

/**
 * 
 * above point and draw point are on same point but in 2 seperate pieces - no 
 * cohesion, but in interfce if we define drawpoint like below, we cant give logic
 * cos interface is only description
 */

interface Point1{
    x:number;
    y:number;

    draw(); // neednt give x, y because it knows they r there in
    // its scope n takes it
}

class Point2{
    x:number;
    y:number;

    drawPoint(){
        console.log("draw point methid");
        console.log(this.x);
        console.log(this.y);
    }// neednt give x, y because it knows they r there in
    // its scope n takes it

    findDistance(another:Point){
        console.log("find distance methid");

    }
}

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

let point= new Point2();
point.drawPoint();
//point.findDistance();

let point1= new Point2();
point1.x=1;
point1.y=2;
point1.drawPoint();


class Point3{
    x:number;
    y:number;
    z:number;

    drawPoint(){
        console.log("draw point methid");
        console.log(this.x);
        console.log(this.y);
    }// neednt give x, y because it knows they r there in
    // its scope n takes it

    findDistance(another:Point){
        console.log("find distance methid");

    }
}

let point3= new Point3();
point3.x;
point3.y;
//point3.z; point3.a -> more params; more lines like this; not efficient
// so construcyr

class Point4{
    x:number;
    y:number;
    private z:number;

   /* constructor(x:number, y:number, z:number){
        this.x=x;
        this.y=y;
        this.z=z;
    }*/ //errors from 258-64 cos of this


   constructor(x?:number, y?:number, z?:number){
        this.x=x;
        this.y=y;
        this.z=z;
    }

    drawPoint(){
        console.log("draw point methid");
        console.log(this.x);
        console.log(this.y);
    }// neednt give x, y because it knows they r there in
    // its scope n takes it

    findDistance(another:Point){
        console.log("find distance methid");

    }
}

/*let point4= new Point4(); //main.ts(232, 17): An argument for 'x' was not provided.
Peek Problem (Alt+F8)
No quick fixes available*/
/*let point4= new Point4(1);
constructor Point4(x: number, y: number, z: number): Point4
Expected 3 arguments, but got 1.ts(2554)
main.ts(232, 27): An argument for 'y' was not provided.
SO MAKE ALL PARAMS OPTIONAL BY ADDING ? in constructr

*/
let point4= new Point4(); // allowed
point4.drawPoint();
let point41= new Point4(1); // allowed
console.log("=====");
point41.drawPoint();
let point42= new Point4(1,2); // allowed
console.log("=====");
point42.drawPoint();
let point43= new Point4(1,2,3); // allowed
console.log("=====");
point43.drawPoint();
let point44= new Point4(1,2,3); // allowed
point44.x=4; //printed this instead of 1
point44.y=5; //printed this instead of 2
//point44.z=6; //Property 'z' is private and only accessible within class 'Point4'.ts(2341)
console.log("=====");
point44.drawPoint();

class Point5{
   // x:number;
   // y:number;
   // private z:number;

   /* constructor(x:number, y:number, z:number){
        this.x=x;
        this.y=y;
        this.z=z;
    }*/ //errors from 258-64 cos of this


   constructor(public x?:number, public y?:number, private z?:number){
        //this.x=x;
        //this.y=y;
        //this.z=z;
    }

    drawPoint(){
        console.log("draw point methid");
        console.log(this.x);
        console.log(this.y);
    }// neednt give x, y because it knows they r there in
    // its scope n takes it

    findDistance(another:Point){
        console.log("find distance methid");

    }

   

}

let point5= new Point5(1,2,3); // allowed
point5.x=4; //printed this instead of 1
point5.y=5; //printed this instead of 2
//point44.z=6; //Property 'z' is private and only accessible within class 'Point4'.ts(2341)
console.log("=====");
point5.drawPoint(); //works same as above


class Point6{
    // x:number;
    // y:number;
    // private z:number;
 
    /* constructor(x:number, y:number, z:number){
         this.x=x;
         this.y=y;
         this.z=z;
     }*/ //errors from 258-64 cos of this
 
 
    constructor(public x?:number, public y?:number, private z?:number){
         //this.x=x;
         //this.y=y;
         //this.z=z;
     }
 
     drawPoint(){
         console.log("draw point methid");
         console.log(this.x);
         console.log(this.y);
     }// neednt give x, y because it knows they r there in
     // its scope n takes it
 
     findDistance(another:Point){
         console.log("find distance methid");
 
     }

     getZ(){
        return this.z;
    }

    setZ(value){
        if(value < 0){
            throw new Error('cant be less than 0');
        }
        this.z=value
    }
 }
 
 let point6= new Point6(1,2,3); // allowed
 point6.x=4; //printed this instead of 1
 point6.y=5; //printed this instead of 2
 //point44.z=6; //Property 'z' is private and only accessible within class 'Point4'.ts(2341)
 console.log("value of z from getter",point6.getZ() );
 console.log("set value of z from setter" );
 point6.setZ(1);
 console.log("value of z again from getter",point6.getZ() );

 console.log("===== 6 end");
 point6.drawPoint(); //works same as above



 class Point61{
    // x:number;
    // y:number;
    // private z:number;
 
    /* constructor(x:number, y:number, z:number){
         this.x=x;
         this.y=y;
         this.z=z;
     }*/ //errors from 258-64 cos of this
 
 
    constructor(public _x?:number, public y?:number, private z?:number){
         //this.x=x;
         //this.y=y;
         //this.z=z;
     }
 
     drawPoint(){
         console.log("draw point methid");
         console.log(this._x);
         console.log(this.y);
     }// neednt give x, y because it knows they r there in
     // its scope n takes it
 
     findDistance(another:Point){
         console.log("find distance methid");
 
     }

     get Z(){
        return this.z;
    }

    set Z(value){
        if(value < 0){
            throw new Error('cant be less than 0');
        }
        this.z=value
    }

    get x(){
        return this._x;
    }

    set x(value){
        if(value < 0){
            throw new Error('cant be less than 0');
        }
        this._x=value
    }
 }
 
 let point61= new Point61(1,2,3); // allowed
 point61.x=7; //printed this instead of 1
 point61.y=5; //printed this instead of 2
 //point44.z=6; //Property 'z' is private and only accessible within class 'Point4'.ts(2341)
 console.log("value of z from getter",point61.Z ); //using lyk normal x,y,z
 console.log("set value of z from setter" );
 point61.Z=1;
 console.log("value of z again from getter",point61.Z );

 console.log("===== 61 end");
 point61.drawPoint(); //works same as above

 import {Point62} from './point'; //angular modules @angular/core
 let point62 = new Point62(4,5,6);
console.log("===== 62  start");
point62.drawPoint();
console.log("===== 62  end");













     


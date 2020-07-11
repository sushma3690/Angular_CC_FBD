export class Point62{
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
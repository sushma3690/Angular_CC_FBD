export class Like{
  
    constructor(private _likeState?:boolean, private _likeCount?:number){
      console.log(" initied post with like as ", this._likeState);
      console.log(" and count as ", this._likeCount);

    }

     get likeCount(){
        return this._likeCount;
    }
 
   // set likeCount(value){
   //      this._likeCount = value;
    //}
     get likeState(){
        return this._likeState;
    }
 
   /*  set likeCount(value){
         this._likeCount = value;
    } */

    press(){
        if(!this._likeState){
        this._likeCount++;
        this._likeState = true;
        console.log("liked the post and current count is ", this._likeCount);
        }else{
            this._likeCount--;
            this._likeState = false;
        console.log("unliked the post and current count is ", this._likeCount);

        }
    }

}
import {Like} from './exercise_like_module';

console.log("here");

let like = new Like(false,1);
like.press();// true,2
like.press();//false,1
like.press();// true,2
like.press();//false,1

console.log(`like count , ${like.likeCount}`);
console.log(`like status , ${like.likeState}`)
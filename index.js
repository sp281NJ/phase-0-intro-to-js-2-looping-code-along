// Code your solutions in this file
const surprise = [
    "Thank you, Guadalupe, for the wonderful surprise gift!",
    "Thank you, Ollie, for the wonderful surprise gift!",
    "Thank you, Aki, for the wonderful surprise gift!"];

function writeCards(){
    for (let i=0; i<surprise.length;i++){
console.log(`${surprise[i]}`);
debugger;
    }
    return surprise;
}
writeCards(surprise);


function countDown(){
   /*for (let i=11; i<10; i--){
    console.log(i);
   }
   */
  let countd = 10;
  while(countd >= 0){
    console.log(countd--);

  }

}
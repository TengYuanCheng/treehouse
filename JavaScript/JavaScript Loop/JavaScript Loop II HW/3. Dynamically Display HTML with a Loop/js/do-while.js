function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
let Head='';
let counter =0;
do{
   //HW1;
//  console.log(`This random number is ${getRandomNumber(10)}`);
  //Mine Variation
Head += `<div>${getRandomNumber(10)}</div>`;
  //console.log(`${Head}`);
document.querySelector('main').innerHTML = Head;

  counter += 1;
}while(counter <10)
function theBeatlesPlay(array1, array2){
let songs = [];
for(let i=0;i<array1.length;i++){
songs=array1[i] + array2[i];
}
  return songs;
}
function johnLennonFacts(array){
for(let i=0;i<array.length;i++){
let s = array[i];
let exclamation = "!!!"
array[i] = s.concat(exclamation);
}
return array;
}
function iLoveTheBeatles(number){
let array = [];
do{
array.push('I love the Beatles!');
++number;
} while(number<15)
return array;
}

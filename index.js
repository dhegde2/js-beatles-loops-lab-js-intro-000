function theBeatlesPlay(array1, array2){
let songs = [];
let a=0;
if(array1.length > array2.length){
  a=array1.length;
} else {
  a=array2.length;
}
for(let i=0;i<a;i++){
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
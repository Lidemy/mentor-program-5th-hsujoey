function join(arr, concatStr) {
  var result =arr[0]+concatStr

  for(var i=1 ; i< arr.length-1 ; i++){
  result += arr[i]+concatStr
  
  }  
  result += arr[arr.length-1]
  return result

}



function repeat(str, times) {
  var result =''  

  for(var i=1 ; i<=times ; i++){
      result += str
  }

  return result

}

console.log(join([1, 2, 3], ''));
console.log(repeat('yoyo', 2));


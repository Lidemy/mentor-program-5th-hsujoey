function reverse(str) {
    
  var result = str[str.length-1]

  for(i=str.length-2 ; i >= 0 ; i--){
   result += str[i]
  }

  console.log(result)

}

reverse('yoyoyo');




function capitalize(str){
    var result = str[0].toUpperCase()

    for(var i=1; i <= (str.length-1) ; i++){
      result += str[i]
    }

    return result
  }

  console.log(capitalize('hello'))


 
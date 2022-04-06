function without(source,itemsToRemove) {

  let newArray = [];

  for(i = 0; i < source.length; i ++) {
      //console.log(source[i])
      
      //check to see if it is in itemstoremove
      if(source[i] === itemsToRemove[i]) {
          //console.log("yes contains");
          result = source.splice(source[i]);
          console.log(result)

      }
  }

}

}
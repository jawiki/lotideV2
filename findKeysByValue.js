const findKeyByValue = function (object,value) {


  const find = Object.keys(object);

  for (const key of find) {
      
      if (object[key] === value){
          //console.log(key)
          return key
      }
  }
}  
     
console.log(`${key}: ${object[key]}`);

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
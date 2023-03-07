/* Todo: Implment the functions below and then export them
      using the module.exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let arrayStats = (array) => {
  // checking if the array exists
  if (array === undefined) {
    throw "array does not exist";
  }
  //checking if the array is of correct type
  if (Array.isArray(array) != true) {
    throw "array is not of correct type";
  }
  //array is not empty
  if (array.length == 0 || array == undefined) {
    throw "array cannot be empty";
  }

  // checking if all the elements in the array are numbers
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] != "number") {
      throw "eneter only numbers in an array";
    }

    array.sort((x,y)=>(x-y));

    //mean
    let a = 0;
    let mean = 0;
    const b = array.length;
    for (i = 0; i < b; i++) {
      a = a + array[i];
      mean = a / b;
    }

    //max
    let maximum = array[array.length - 1];

    //min
    let minimum = array[0];

    //range
    let range = maximum - minimum;

    //count
    let count = array.length;

    //median

    let mid = Math.floor(count / 2);
    median = count % 2 === 0 ? (array[mid - 1] + array[mid]) / 2 : array[mid];

    //mode
    let mode = 0;
    i=0;
    while (i<count){
      if(array[i]==array[i+1]){
        mode = array[i];
        i=i+1
      }
      else{
        i=i+1
      }
    }

    //Sum

    let sum=0
    for(const read of array){
      sum = sum+read
    }
   

    const Calculations = {
      mean: mean,
      median: median,
      mode: mode,
      maximum: maximum,
      minimum: minimum,
      count: count,
      range: range,
      sum: sum,
    };

    return Calculations;
  }
};

let makeObjects = (...arrays) => {
  // this function takes in a variable number of arrays that's what the ...arrays signifies

  for (i = 0; i < arrays.length; i++) {
    // cheking 2 elements in array
    if (arrays[i].length !== 2) {
      throw "the length exceeds more than two elements  ";
    }
    // checiing if array is array
    if (Array.isArray(arrays[i]) !== true) {
      throw "the array is of incorrect type";
    }
    // checking if array is empty
    if (arrays[i] == []) {
      throw "the passed array is empty";
    }
  }

  const entries = new Map(arrays);
  const obj = Object.fromEntries(entries);
  return obj;

  // console.log(keyValue);
};

let commonElements = (...arrays) => {
 // this function takes in a variable number of arrays that's what the ...arrays signifies
  for(i=0;i<arrays.length;i++)
  {
  //cheking 2 elements in array
   if(arrays[i].length<2){
     throw 'the length must have atleast two elements  '
   }
  //checiing if array is array
   if(Array.isArray(arrays[i])!= true){
     throw 'the array is of incorrect type'
   }
  //checking if array is empty
   if(arrays[i]==[]){
     throw 'the passed array is empty'
   }
 
}

let op = []


for (let i = 0 ; i<arrays.length; i++){
  op=arrays.reduce((p,c) =>
  p.filter(e => c.includes(e)));

}

return op;
}


module.exports = {
  arrayStats,
  makeObjects,
  commonElements,
};

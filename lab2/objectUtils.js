/* Todo: Implment the functions below and then export them
      using the module.exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let deepEquality = (obj1, obj2) => {
  if (typeof obj1 !== "object" && obj2 !== "object") {
    throw "object  does not exist";
  } else if (Object.keys(obj1).length == 1 && Object.keys(obj2).length == 1) {
    throw "objet msut have only two elements";
  } else if (obj1 === null || obj2 === null) {
    throw " objects can't be null";
  } else if (typeof obj1 === Array || typeof obj2 === Array) {
    throw " can't be of type array ";
  } else if (Array.isArray(obj1) == true || Array.isArray(obj2) == true) {
    throw " can't be of type array";
  }

  let isdeepequal = (obj1, obj2) => {
    let objkeys1 = Object.keys(obj1);
    let objkeys2 = Object.keys(obj2);

    if (objkeys1.length !== objkeys2.length) {
      return false;
    }

    for (var key of objkeys1) {
      let a = obj1[key];
      let b = obj2[key];

      let isObjects = isObject(a) && isObject(b);

      if ((isObjects && !isdeepequal(a, b)) || (!isObjects && a !== b)) {
        return false;
      }
    }
    return true;
  };
  let isObject = (object) => {
    return object != null && typeof object === "object";
  };

  return isdeepequal(obj1, obj2);
};

let commonKeysValues = (obj1, obj2) => {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    throw "object  does not exist";
  } else if (Object.keys(obj1).length == 1 && Object.keys(obj2).length == 1) {
    throw "objet msut have only two elements";
  }
else if (obj1 === null || obj2 === null) {
      throw " objects can't be null";
    } else if (typeof obj1 === Array || typeof obj2 === Array) {
      throw " can't be of type array ";
    } else if (Array.isArray(obj1) == true || Array.isArray(obj2) == true) {
      throw " can't be of type array";
    }

  let result = {};
  let result2 = {};

  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      result[key] = obj1[key];
      //console.log (result[key])
    } else if (
      typeof obj1[key] === "object" &&
      obj1[key] !== null &&
      typeof obj2[key] === "object" &&
      obj2[key] !== null
    ) {
      result[key] = commonKeysValues(obj1[key], obj2[key]);
          }
    }
  
  for (const [key, val] of Object.entries(result)) {
    result2 = { key, val };
    result2 = Object.assign(result, val);
  }

  return result2;
};

let calculateObject = (object, func) => {
  if (typeof object !== "object") {
    throw "object or function does not exist";
  } else if (typeof func !== "function") {
    throw " function is undefined ";
  }
 

  for (i in object) {
    object[i] = Number(Math.sqrt(func(object[i])).toFixed(2));
  }

  return object;
};

module.exports = {
  calculateObject,
  deepEquality,
  commonKeysValues,
};

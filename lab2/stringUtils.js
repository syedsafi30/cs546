/* Todo: Implment the functions below and then export them
      using the module.exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let palindromes = (string) => {
  if (string.length === 0) {
    throw "string does not exist ";
  } else if (string.trim().length === 0) {
    throw " string cannot be only spcaes";
  }
  if (typeof string !== "string") {
    throw " string should be of correct type";
  }

  let word;
  const array2 = [];
  const myarray = string.split(" ");
  for (let i = 0; i < myarray.length; i++) {
    word = myarray[i];
    word2 = myarray[i];
    word = word.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");

    let a = word.length - 1;
    for (j = 0; j < a; j++) {
      let x = word[j];
      let y = word[a - j];

      //testing starts heere
      if (x != y) {
        break;
      } else if (x == y) {
        if (j == a - 1) {
          array2.push(word2);
        }
      }
    }
  }
  return array2;
};

let replaceChar = (string) => {
  if (string.length === 0) {
    throw "string does not exist ";
  } else if (string.trim().length === 0) {
    throw " string cannot be only spcaes";
  }
  if (typeof string !== "string") {
    throw " string should be of correct type";
  }

  result = string.replace(/(.)./g, "$1*");
  let result2 = result.replace(/(...)./g, "$1$");

  return result2;
};

let charSwap = (string1, string2) => {
  let firstfour = string1.substring(0, 4);

  let secondfour = string2.substring(0, 4);

  let finalstring1 = secondfour + string1.substring(4, string1.length);
  let finalstring2 = firstfour + string2.substring(4, string2.length);

  finaloutput = finalstring1 + " " + finalstring2;

  return finaloutput;
};

module.exports = {
  palindromes,

  replaceChar,

  charSwap,
};

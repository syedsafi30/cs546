const questionOne = function questionOne(arr) {
 for (i = 0; i < arr.length; i++) {
    for (let j = 2; j < arr[i] - 1; j++) {
      if (arr[i] % j == 0) {
        arr[i] = false;
        
      }
    }
  };
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== false) {
      arr[i] = true;
    }
  }
  return arr;

}

const questionTwo = function questionTwo(startingNumber, commonRatio, numberOfTerms) {
 if (startingNumber==0||commonRatio==0){
  return 0;
  }
  else if(numberOfTerms<=0)
  {
    return NaN;
  } 
  else{
      result=0;
      result=result+startingNumber;
      for(i=1;i<numberOfTerms;i++)
      {
        startingNumber=startingNumber*commonRatio;
        result=result+startingNumber;
      }
    }
    return result;
}    
const questionThree = function questionThree(str) {
  numberofstrings=0;
  for (i=0;i<str.length;i++){
    if (str.charAt(i) == 'b'||str.charAt(i) == 'c'||str.charAt(i) == 'd'||str.charAt(i) == 'f'||str.charAt(i) == 'j'||str.charAt(i) == 'k'||str.charAt(i) == 'l'||str.charAt(i) == 'm'||str.charAt(i) == 'n'||str.charAt(i) == 'p'||str.charAt(i) == 'q'||str.charAt(i) == 'r'||str.charAt(i) == 's'||str.charAt(i) == 't'||
    str.charAt(i) == 'v'||str.charAt(i) == 'w'||str.charAt(i) == 'x'||str.charAt(i) == 'y'||str.charAt(i) =='z'||str.charAt(i) == 'B'||str.charAt(i) == 'C'||str.charAt(i) == 'D'||str.charAt(i) == 'F'||str.charAt(i) == 'J'||str.charAt(i) == 'K'||str.charAt(i) == 'L'||str.charAt(i) == 'M'||str.charAt(i) == 'N'||str.charAt(i) == 'P'||str.charAt(i) == 'Q'||str.charAt(i) == 'R'||str.charAt(i) == 'S'||str.charAt(i) == 'T'||
    str.charAt(i) == 'V'||str.charAt(i) == 'W'||str.charAt(i) == 'X'||str.charAt(i) == 'Y'||str.charAt(i) =='Z')
    {
      
      numberofstrings=numberofstrings+1;
    }
  
  }
  return numberofstrings;
}

const questionFour = function questionFour(fullString, substring) {


let regex = new RegExp(substring, 'g');
  let result = (fullString.match(regex, '')).length;
  return result;
}



// TODO:  Change the values for firstName, lastName and studentId
module.exports = {
  firstName: 'Safiuddin',
  lastName: 'Syed',
  studentId: '20011128',
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
};




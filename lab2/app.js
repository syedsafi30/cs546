/* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
do not forget that you need to create the package.json and add the start command to run app.js as the starting script*/
/* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
do not forget that you need to create the package.json and add the start command to run app.js as the starting script*/

// error handling for array stats
const arrayUtils =  require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objectUtils = require("./objectUtils");

console.log("----------------------------------------------");
console.log("arraystats:\n");


try {
   //soukd pass
   const arraysts = arrayUtils.arrayStats(
      [9,15,25.5, -5, 5, 7, 10, 5, 11, 30, 4,1,-20]
     );
   console.log(arraysts);
   console.log("arraystats passed succesfully");
 } catch (e) {
   console.error(" arraystats failed test case");
 }


try {
  // Should Fail
  const failcase = arrayUtils.arrayStats([]);
  console.log(failcase)
  console.log("array stats did not error");
} catch (e) {
  console.log("test failed ");
}

// error handling for make objects

console.log("----------------------------------------------");
console.log("MakeObjcts:\n");

try {
  //soukd pass
  const abcde = arrayUtils.makeObjects(
    ["foo", "bar"],
    ["name", "Patrick Hill"],
    ["foo", "not bar"]
  );
  console.log(abcde);
  console.log("makeobjects passed succesfully");
} catch (e) {
  console.error(" makeobjects failed test case");
}

try {
  // Should Fail
  const object = arrayUtils.makeObjects([]);
  console.log("object did not error");
} catch (e) {
  console.log("test failed successfully ");
}

//ERROR HANDLING FOR COMMON ELEMENTS  
console.log("----------------------------------------------");
console.log("Common Elements \n");

const arr1 = [5, 7]; 
const arr2 = [20, 5]; 
const arr3 = [true, 5, 'Patrick']; 
const arr4 = ["CS-546", 'Patrick']; 
const arr5 = [67.7, 'Patrick', true]; 
const arr6 = [true, 5, 'Patrick']; 
const arr7 = [undefined, 5, 'Patrick']; 
const arr8 = [null, undefined, true];
const arr9 = ["2D case", ["foo", "bar"], "bye bye"]
const arr10= [["foo", "bar"], true, "String", 10]

//soukd pass
try{const CE = arrayUtils.commonElements( arr3,arr4
   
 );
 console.log(CE);
 console.log("common elements passed succesfully");
} catch (e) {
 console.error(" common  elements failed test case");
}

try {
 // Should Fail
 const CE1 = arrayUtils.commonElements([1,2,3], [], [1,3,4]);
 console.log("error occurred");
} catch (e) {
 console.log("common elements failed test case ");
}




// error handling for palindrome

console.log("----------------------------------------------");
console.log("palindromes:\n");

try {
  //soukd pass
  const abc = stringUtils.palindromes(
    "He Mom, apspda tat, malayalam! peep lol malbyalam"
  );
  console.log(abc);
  console.log("palindromes passed succesfully");
} catch (e) {
  console.error("palindromes failed test case");
}

try {
  //soukd fail
  const abc = stringUtils.palindromes();
  console.log(abc);
  console.log("palindromes passed succesfully");
} catch (e) {
  console.error("palindromes failed successfully");
}

// error handling for replcechar
console.log("----------------------------------------------");
console.log("ReplaceChar\n");

try {
  const mustpass1 = stringUtils.replaceChar(
    "Hello, How are you? I hope you are well"
  );
  console.log(mustpass1);
  console.log("replaceChar passed succesfully");
} catch (e) {
  console.error("replace failed test case");
}

try{ const mustpass1 = stringUtils.replaceChar(
   1223
 );
 console.log(mustpass1);
 console.log("replaceChar passed succesfully");
} catch (e) {
 console.error("replace failed test case");
}
// error handling for charswap
console.log("----------------------------------------------");
console.log("charswap\n");

try {
  const outputstr = stringUtils.charSwap("Patrick", "Hill");
  console.log(outputstr);
  console.log("charswap passed succesfully");
} catch (e) {
  console.error("charswap  failed test case");
}

try {
  const mustfail = stringUtils.charSwap("");
  console.log(mustfail);
  console.log("charswap passed");
} catch (e) {
  console.error("charswap  failed test case");
}



// checking deep equality

console.log("------------------------------------------------");
console.log("Checking deep equality\n");


const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}

//must pass
try{
const deepeql = objectUtils.deepEquality(forth, fifth)
console.log(deepeql)
console.log("deep equality passed successfully")
}catch(e){
   console.log("deep equality failed")
}

// must fail
try{
   const deepeql2 = objectUtils.deepEquality({a: 2, b: 4}, [3,4,5])
   console.log(deepeql2)
   console.log("deep equality passed successfully")
   }catch(e){
      console.log("deep equality failed")
   }

// checking common values
console.log("------------------------------------------------");
console.log("Checking common key values\n");

const first11 = {name: {first: "acde", last: "qwer"}, age: 46};
const second22 = {school: "Stevens", name: {first: "acde", last: "qwer"}};
const third1 = {a: 2, b: {c: true, d: false}};
const forth2 = {b: {c: true, d: false}, foo: "bar"};


try{
const comval = objectUtils.commonKeysValues( third1, forth2)
console.log(comval)
console.log("Common KeyValues passed successfully")}
catch(e){
   console.log("common Keyvalues failed")
}

try{
   const comval2 = objectUtils.commonKeysValues({3:4},null )
   console.log(comval2)
   console.log("Common KeyValues passed successfully")}
   catch(e){
      console.log("common Keyvalues failed")
   }

   // Calculate Object
console.log("----------------------------------------------");
console.log("Calculate Object:\n");

//must pass
try{
const newobj = objectUtils.calculateObject({ a: 3, b: 7, c: 5 }, (n) => n * 2);
console.log(newobj)
console.log("Calculate Object passed succesfully")
} catch (e) {
   console.log("calculate object failed test case")
}

//must fail
try{
   const newobj2 = objectUtils.calculateObject(1,  (n) => n * 2 );
   console.log(newobj2)
   console.log("Calculate Object passed succesfully")
   } catch (e) {
      console.log("calculate object failed test case")
   }

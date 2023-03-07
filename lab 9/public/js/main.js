// /*
// Using JavaScript in your browser only, you will listen for the form's submit event; when the form is submitted, you will:
// -Get the value of the input text element.
// -You should be expecting a variable number of arrays typed into the input separated by commas:  For example: [3,0,1,2,4], [1,2,8,15], [6,3,10,25,29]
// -All array elements should be whole numbers (negative and 0 are allowed), no decimals.
// -Each array should have at least one element that is a whole number (negative and 0 are allowed), no decimals.
// -You can ignore any extra commas for example, inputting: [3,0,1,2,4], [1,2,8,15], [6,3,10,25,29],
// -There should be at least one array inputted.
// -You will then return a single array that has all the values from the arrays inputted sorted from lowest to highest number.  For example:  If our input was: [3,0,1,2,4], [1,2,8,15], [6,3,10,25,29] You would return:  [0,1,1,2,2,3,3,4,6,8,10,15,25,29]
// -Add a list item to the #results list of result of the sort you have just completed. You will alternate the class for each list item using the classes is-green and is-red (described below), starting with is-green first.
// -If the user does not have a value for the input when they submit, you should not continue processing and instead should inform them of an error somehow.
// */

let myForm = document.getElementById("myForm");
let textInput = document.getElementById("userinput"); //element
let errorDiv = document.getElementById("error");
let myUl = document.getElementById("results");
let frmLabel = document.getElementById("formLabel");

function SortingArrays(s) {
  const replaced = s.replace(/\[/g, "");
  const replaced2 = replaced.replace(/\]/g, "");
  const arr = replaced2.split(",");
  const arr2 = [];
  for (i of arr) {
    if (/^\d+$/.test(i) === true) {
      arr2.push(i);
    }
  }
  arr2.sort((a, b) => a - b);
  return arr2;
}

if (myForm) {
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (textInput.value) {
      errorDiv.hidden = true;
      textInput.classList.remove("inputClass");
      errorDiv.hidden = true;
      frmLabel.classList.remove("error");
      textInput.value = SortingArrays(textInput.value);
      let li = document.createElement("li");
      li.innerHTML = "[" + textInput.value + "]";
      myUl.appendChild(li);
      myForm.reset();
    } else {
      textInput.value = "";
      errorDiv.hidden = false;
      errorDiv.innerHTML = "You must enter a value";
      frmLabel.className = "error";
      textInput.focus();
      textInput.className = "inputClass";
    }
  });
}

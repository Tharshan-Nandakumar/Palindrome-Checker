const check = document.getElementById('check-btn');
const result = document.getElementById('result');

function cleanInputString (str) {
  return str.replace(/\W/g, '').replace("_", '').toLowerCase(); //replaces non-alphanumeric characters with an underscore. \W is [^a-zA-Z0-9_] 
}

const checkPalindrome = () => {
  const text = document.getElementById('text-input').value;
  //Check if value is inputted
  if (text === "") {
    alert("Please input a value");
    return;
  }
  //Checking if palindrome
  const cleanText = cleanInputString(text);
  if (cleanText===cleanText.split("").reverse().join("")) {
    result.innerHTML = `<p>${text} is a palindrome</p>`;
    } else {
      result.innerHTML = `<p>${text} is not a palindrome</p>`;
      }
  }
  
  //If check button is clicked, function is carried out
check.addEventListener("click",checkPalindrome);



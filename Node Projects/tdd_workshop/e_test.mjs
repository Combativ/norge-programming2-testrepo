import test from "./test.mjs";


function toTitleCase(sentence) {
  let output = ""; 
  let capitalizeNext = true; 

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (char === " ") {
      output += char; 
      capitalizeNext = true; 
    } else if (capitalizeNext) {
      output += char.toUpperCase(); 
      capitalizeNext = false; 
    } else {
      output += char.toLowerCase(); 
    }

  }

  return output.trim(); 
}


const tester = test("Testing toTitleCase function");


tester.isEqual(toTitleCase("this is A simple Test,,"), "This Is A Simple Test,,", "Testing toTitleCase() with string 'this is A simple Test,,'");
tester.isEqual(toTitleCase(`I have 99 problems, but `, 420, "isn't one of them."), "I Have 99 Problems, But 420 Isn't One Of Them.", "Testing toTitleCase() with concatinated strings and numbers");
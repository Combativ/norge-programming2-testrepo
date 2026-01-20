# Playing with strings

Given the following function and description discuss what tests would be apropriate and why, write the tests. Remember to consider the behaviour of bad input.



```JavaScript
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
```
Example:
```JavaScript

toTitleCase("hello world"); // -> Hello World

```


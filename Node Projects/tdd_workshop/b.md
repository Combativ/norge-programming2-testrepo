# Addition revisited

Given the following function discuss what tests would be apropriate and why, write the tests. In this version of the problem it is worth considering what edge cases could exist. 

```JavaScript

function sum(a, b, ...c) {
  return a + b + c.reduce((prev, cur) => prev + cur);
}

```

Note that ```reduce```is a function that in this case takes all the items in array c and sums them.
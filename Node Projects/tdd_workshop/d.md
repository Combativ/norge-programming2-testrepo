# Valid Password?

Given the following function and description discuss what tests would be apropriate and why, write the tests.



```JavaScript
/*
    Function Description:
    A password is valid if it meets the following criteria:
	1. Minimum 8 characters.
	2. Maximum 16 characters.
	3. Contains at least one uppercase letter.
	4. Contains at least one number.
*/

function isValidPassword(password) {
  if (password.length < 8 || password.length > 16) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/\d/.test(password)) {
    return false;
  }
  return true;
}
```


import test from "./test.mjs";


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


const passwordTester = test("Testing isValidPassword function");

passwordTester.isEqual(isValidPassword("Hallo"), false, "Testing password 'Hallo'");
passwordTester.isEqual(isValidPassword("kjashd8796as)(DFZH)FS)(HASD)FHf"), false, "Testing password 'kjashd8796as)(DFZH)FS)(HASD)FHf'");
passwordTester.isEqual(isValidPassword("kjaFS)(HASD)FHf1"), true, "Testing password 'kjaFS)(HASD)FHf1'");
passwordTester.isEqual(isValidPassword("\nl\nR\ta\0"), true, "Testing password '\nl\nR\ta\0'");
passwordTester.doesNotThrowError(() => isValidPassword("\n\n\0TT8"), "Testing password '\n\n\0TT8' Should not throw error.");
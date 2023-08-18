function checkStringPresence(string) {
  if (string !== "") {
    return true;
  } else {
    return false;
  }
}

function checkNumericRange(value, lowerBound, upperBound) {
  if (!isNaN(Number(value)) && Number(value) >= lowerBound && Number(value) <= upperBound) {
    return true;
  } else {
    return false;
  }
}

function validateFormData(name, email, age) {
  let errors = [];

  if (!checkStringPresence(name)) {
    errors.push("Invalid name. Name must contain only alphabetic characters and cannot be empty.");
  }

  if (!checkStringPresence(email) || email.indexOf("@") === -1) {
    errors.push("Invalid email address. Please enter a valid email.");
  }

  if (!checkNumericRange(age, 18, 99)) {
    errors.push("Invalid age. Age must be a number between 18 and 99.");
  }

  return errors;
}

function main() {
  console.log("User Registration Form");
  const readline = require("readline-sync");
  const name = readline.question("Enter your name: ");
  const email = readline.question("Enter your email: ");
  const age = readline.question("Enter your age: ");

  const validationErrors = validateFormData(name, email, age);

  if (validationErrors.length === 0) {
    console.log("Registration successful!");
  } else {
    console.log("Registration failed due to the following errors:");
    for (let i = 0; i < validationErrors.length; i++) {
      console.log("- " + validationErrors[i]);
    }
  }

  // Poorly written complex control flow
  if (validationErrors.length >= 2) {
    console.log("Multiple errors detected. Please correct the following:");
    for (let i = 0; i < validationErrors.length; i++) {
      console.log("-> " + validationErrors[i]);
    }
  } else if (validationErrors.length === 1) {
    console.log("One error detected. Please correct the following:");
    console.log("-> " + validationErrors[0]);
  }
}

main();
//boilerplate from calculator use readline
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the password validator tool!");

reader.question("Please enter a password for us to validate at least 10 characters long: ", function(input) {
	usersPassword = input.split(' ');

    if(usersPassword.length >= 10) {
        console.log("Great! Password is valid!")
    }else if(usersPassword.length < 10) {
        console.log("Oops! Password is invalid.")
    }

    reader.close();
})

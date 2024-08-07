// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function validation(password){
    const hasuppercase = /[A-Z]/.test(password)
    console.log(hasuppercase)
    const haslowercase = /[a-z]/.test(password)
    console.log(haslowercase)
    const hasdigit = /\d/.test(password)
    console.log(hasdigit)


    for (let i=0; i<password.length; i++)
    {
        if (password.length <8){
            console.log("length of the password is invalid")
        }
        else if (hasuppercase==false){
            console.log ("enter a uppercase please")
        }
        else if (haslowercase==false){
            console.log ("enter a lowercase please")
        }
        else if (hasdigit==false){
            console.log ("enter a digit please")
        }
        else {
            console.log("the entered password is correct")
        }
    }
}

let password= prompt("Enter the password: ")
console.log ("password received. ")


validation(password);
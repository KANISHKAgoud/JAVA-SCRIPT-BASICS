// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function reversed (){
    for(let i=string.length-1; i>=0 ; i--){
        reversedstring= reversedstring+string[i];
    }
    return reversedstring;
}

let string ="yakul";
let reversedstring="";

let result = reversed();
console.log(result)

// lukay
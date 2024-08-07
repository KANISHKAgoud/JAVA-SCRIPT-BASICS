// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vowels (string){
    let numberOFVowel=0; 
    for (i=0; i<string.length; i++)
    {
        if (string[i]=='a'|| string[i]=='e' || string[i]=='i'|| string[i]=='o' || string[i]=='u'|| string[i]=='A' || string[i]=='E'|| string[i]=='I' || string[i]=='O'|| string[i]=='U'){
            numberOFVowel= numberOFVowel+1;
        }
    }
    return numberOFVowel;
}

let string ="kukiKANISHKA"
let result= vowels(string)
console.log (`your string has ${result} this many vowels`)
// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function arrayElement(array){
    let lastElement=null;

        for(let i=0; i<array.length; i++){
            let currentElement= arr[i];

            if (currentElement != lastElement){
                arrDouble.push(currentElement*currentElement)
                lastElement=currentElement;
            }
       }
       return arrDouble;
}

let arr=[88,43,6,2, 2, 54,53]
let arrDouble=[]

let result= arrayElement(arr)
console.log(result)
// arr=[176 , 86 ,12, 4,108,106 ]
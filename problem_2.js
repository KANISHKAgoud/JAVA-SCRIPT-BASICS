// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function arrayElement(element){

    arrDouble.push(element*2)
}

let arr=[88,43,6,2, 2, 54,53]
let arrDouble=[]

for (const element of arr) {
    for(let i=0; i<arr.length; i++){
        for (let j=1; j<arr.length; j++){         
            try {
                arr[i]==arr[j]
            } catch (error) {
                continue;
            }
        }
        arrayElement(arr[i])
    }
}
console.log(arrDouble)
// arr=[176 , 86 ,12, 4,108,106 ]
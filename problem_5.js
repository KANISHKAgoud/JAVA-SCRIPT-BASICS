// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation


function SumOnlyPositive(array){
    const lastElement=null
    let result=0;
    for (let i=0; i<array.length ; i++ )
    {
        const currentElement=array[i];
        if (currentElement>0){
            result=result+ array[i];
        }
        else{
            return result;
        }
    }
    return result;
}

let array= [5,67,68,34,-35,46,78]
let sum= SumOnlyPositive(array);
console.log(sum);

// 174
// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function multiplication_array (array){
    let multiplied_array=[]
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            array.map(e => {
                multiplied_array.push(e*2)
                console.log(multiplied_array)
            })
            
        }, 500);  
    }
    )
}

(async function main() {
 
    let array= [78, 44, 45, 88, 10]
    let result= await multiplication_array(array)
    console.log (`the new array is ${result}`)
}) ()
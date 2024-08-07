// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function brewCoffee (type){
    let delay= Math.ceil(Math.random()*6000)
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(`${type} is ready !!`)
      }, delay);
    }
    )
}

let type= prompt("Enter the type of Coffee you want ")
let result= brewCoffee(type)
result.then((e) => {
    console.log(e);
}
)
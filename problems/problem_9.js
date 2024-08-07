// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function placeOrder() {
    let delay= Math.floor(Math.random()*5000)
    let promise= new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("your order is placed")
        }, delay);
    })
    return promise;
}

let promise=placeOrder()

promise.then((e) => {
    console.log(e)
}
)

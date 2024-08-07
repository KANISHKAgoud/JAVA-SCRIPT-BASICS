// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

async function calculateTotal (products, prices, quantities){
    let TotalAmount =0;
    for (let i=0; i<products.length; i++)
    {
        TotalAmount= TotalAmount + (prices[i] * quantities [i]);
    }
   
    return TotalAmount;

}

(async function main() {

    let products = ["shampoo", "moisturizer", "pen", "book"]
    let prices= [130, 145, 10, 250]
    let quantities = [1,1,6,3]
        
    let result = await calculateTotal(products, prices, quantities)  
    console.log(result)
})()


//1085
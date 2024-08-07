// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products, filtercriterion){
    return products.filter (product => {
        for (let key in filtercriterion) {
                 if (product[key] !== filtercriterion[key])
                 {
                    return false;
                 }
        }
        return true; 
    });
}
    

let products=[{
    id:1,
    category: "subjects",
    book: "Math",
    class: "5th",
    price: 78,
    instock: true
},
{
    id:2,
    category: "electonics",
    book: "iot",
    class: "12th",
    price: 145,
    instock: true
},
{
    id:2,
    category: "subjects",
    book: "science",
    class: "7th",
    price: 45,
    instock: true
    
}]

let filtercriterion ={
    category: "subjects",
    instock: true
}

let result= filterProducts(products, filtercriterion)
console.log(result)
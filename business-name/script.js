let a = Math.random()
let first, second, third;
//first word
if (a<0.33)
{
    first = "crazy"
}

else if (a<0.66)
{
    first = " Amazing "
}

else {
    first = " Fire "
}

//second word 
a = Math.random()
if (a<0.33)
{
    second = "engine"
}

else if (a<0.66)
{
    second = " Foods "
}

else {
    second = " Garments "
}


//third word
a = Math.random()
if (a<0.33)
{
    third = " Bros "
}

else if (a<0.66)
{
    third = " Limited "
}

else {
    third = " Hub "
}

console.log(`${first} ${second} ${third}`)

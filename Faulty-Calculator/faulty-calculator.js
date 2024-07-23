console.log("this is a faulty calculator");

let a = prompt(" enter the value of a ");
let d = prompt("What do u want to print +, -, *, /, % ");
let b = prompt(" enter the value of b ");

let c= {
  "+":"-",
  "*":"+",
  "-":"/",
  "/":"**",
}

let e = Math.random()
if ((e >0.1 )) {
  console.log(`your answer is ${eval (`${a} ${d} ${b}`)} THANK YOU`)
} 

else {
  d=c[d]
  console.log(`your answer is ${eval (`${a} ${d} ${b}`)} THANK YOU`)
}



let a = prompt("enter the value of which you want a factorial");
var arr=[]

let i = 1;
let n=a ,b=a
var answer = 1;
for (n; n > i; n--) {
    answer = n * answer;
}
console.log(answer)

for (let index=0;index<a;index++)
    {
       arr[index]=b
       b--
    }

console.log(arr)

const using_reduce = (a,b) =>{
    return a*b
}

console.log(arr.reduce(using_reduce))

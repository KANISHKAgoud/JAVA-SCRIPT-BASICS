console.log("script.js initialisation");

let a = document.querySelector(".container").children

console.log(a);

function colors() {
  var b = Math.ceil(Math.random() * 255)
  var c = Math.ceil(Math.random() * 255)
  var d = Math.ceil(Math.random() * 255)
  return `rgb(${b}, ${c}, ${d})`
}

// console.log(b)

console.log(Array.from(a));   

Array.from(a).forEach(e => {
  e.style.backgroundColor = colors()
})


console.log("script.js initialiasation ");

var container = document.querySelector(".container");
let dura= document.querySelector(".image")
var j = "2200000";

function views(numbers) {
  if (numbers < 1000) {
    return (container.innerHTML = `${numbers} views `);
  } else if (numbers < 10000) {
    return (container.innerHTML = `${numbers[0]}K views`);
  } else if (numbers < 100000) {
    return (container.innerHTML = `${numbers[0]}.${numbers[1]} K views`);
  } else if (numbers < 1000000) {
    return (container.innerHTML = `${numbers[0]}M views`);
  } else if (numbers < 10000000) {
    return (container.innerHTML = `${numbers[0]}.${numbers[1]} M views`);
  }
}

function duration_box(duration){
  let html = `<span duration> ${duration} </span> `
  document.querySelector(".duration").innerHTML=html
}

function cardElements(a, cname, j, months, duration) {
  let views_numbers = views(j);
  container.style.paddingLeft = "13rem"
  let duration_function = duration_box(duration)
  container.innerHTML = `${a} ${cname} . ${views_numbers} . ${months} months ago`;
}

cardElements(
  "<div><b> Installing VS code & How Websites Work | Sigma Web Development Course - Tutorial #1 </b><div>","CodeWithHarry", j, 10, "31:20")


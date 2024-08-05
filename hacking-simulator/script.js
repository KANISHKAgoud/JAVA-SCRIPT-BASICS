console.log("script.js initiliasation")

const Hacking= async (element)=> {
    await delay ();
    let div=document.createElement("div");
    div.innerHTML=element;
    document.querySelector(".container").append(div);
}

const delay = () =>{
    return new Promise((resolve, reject) => {
        timeout =1+6*(Math.random())
        setTimeout(() => {
            resolve()
        }, 1000*timeout);
    })   
}

let arr =[ "Initializing Hacking", 
    "Reading your Files", 
    "Password files detected", 
    "Sending all passwords and personal files to server", 
    "Cleaning up"]

for (const element of arr) {
    Hacking(element)
}
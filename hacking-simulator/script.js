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

async function main() {
    
        setInterval(() => {
            let dots=document.body.getElementsByTagName("div")
            dots = dots [dots.length-1]
            if (dots.innerHTML.endsWith("..."))
            {
                dots.innerHTML=dots.innerHTML.slice(0, dots.innerHTML.length-3)
            }
            else
            {
                dots.innerHTML= dots.innerHTML + ".";
            }
            
        }, 700);
    
    
    let arr =[ "Initializing Hacking", 
        "Reading your Files", 
        "Password files detected", 
        "Sending all passwords and personal files to server", 
        "Cleaning up"]
        
        for (const element of arr) {
            await Hacking(element)
        }
    }

main()
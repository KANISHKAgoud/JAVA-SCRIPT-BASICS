const express = require("express")
const fs = require("fs")
const app = express();
const port=3000


app.get("/",(req,res)=>{ 
    fs.readFile("clutter.txt", (e,data)=>{
        let filecontent = data.toString();
        let lines = filecontent.split("\n")
        let a = lines.forEach((value)=>{
        
            if (value.trim().endsWith(".pdf") == true)
            {
                fs.appendFile("pdf.txt", `${value}`, ()=>{
                    console.log()
                })
            }
        
            else if (value.trim().endsWith(".png") == true)
            {
                fs.appendFile("png.txt", `${value}`, ()=>{
                    console.log()
                })
            }
        
            else if (value.trim().endsWith(".jpg") == true)
            {
                fs.appendFile("jpg.txt", `${value}`, ()=>{
                    console.log()
                })
            }
            else if (value.trim().endsWith(".zip") == true)
            {
                fs.appendFile("zip.txt", `${value}`, ()=>{
                    console.log()
                })
            }

            else
            {
                console.log("no")
            }
        })
        console.log(a)
        // console.log(lines)
        // console.log(filecontent)
        // console.log(`this is the error and content \n ${e}\n${data.toString()}`);
        res.send(`hello`)
    })
}) 

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


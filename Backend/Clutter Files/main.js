console.log('harry')

import fs from "fs/promises"
import path from "path"
// console.log(fs)

let basepath = "C:\\Users\\comp\\Desktop\\kuki\\vs code\\fileclutter"

let files = await fs.readdir(basepath)
// console.log(files)

for (const element of files) {
    let extension = path.extname(element);
    console.log(extension)

    if (extension === ".pdf") {
        fs.rename(`${basepath}\\${element}` , `${basepath}\\routers\\pdf\\${element}`)
    }

    else if (extension === ".jpg") {
        fs.rename(`${basepath}\\${element}` , `${basepath}\\routers\\jpg\\${element}`)
   
    }

    else if (extension === ".png") {
        fs.rename(`${basepath}\\${element}` , `${basepath}\\routers\\png\\${element}`)
    }

    else if (extension === ".zip") {
        fs.rename(`${basepath}\\${element}` , `${basepath}\\routers\\zip\\${element}`)
    }
    else {
        console.log("no")
     }
}


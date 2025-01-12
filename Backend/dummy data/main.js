import express from "express"
import mongoose from "mongoose";
import Employee from "./models/Employee.js"

const app = express()
const port = 3000;

const connect = mongoose.connect("mongodb://localhost:27017/Company")

const randomemployees = (arr) => {
    let random = Math.floor(Math.random() * (arr.length - 1))
    return arr[random];
}


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let users = 3;
    res.render('index', { users: users })
})

let Employees_name = ['Rohan', 'Rahi', 'Kanchan', 'Latika']
let Employees_city = ['New York', 'Paris', 'Tokyo', 'Mumbai']
let Employees_language = ['Python', 'Java', 'C++', 'JS']

app.get('/generate', async (req, res) => {
    await Employee.deleteMany({})
    for (let index = 0; index < 10; index++) {
        const e = await new Employee({
            name: randomemployees(Employees_name),
            salary: Math.floor(Math.random()*300000),
            language: randomemployees(Employees_language),
            city: randomemployees(Employees_city),
            isManager: Math.random()>0.5 ? true : false
        })
        e.save()
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
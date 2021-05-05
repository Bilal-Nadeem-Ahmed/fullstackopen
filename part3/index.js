// const { response, request } = require('express')
const { request, response } = require('express')
const express= require('express')
const app = express()
app.use(express.json())
const morgan=require('morgan')
// app.use(morgan('tiny'))
//custom morgan token
morgan.token('data',(request,response)=>JSON.stringify(request.body))

app.use(morgan(':method :url :status :response-time ms  :data'))
// cors
const cors = require('cors')

app.use(cors())

let persons= [
    {
    id:1,
    name: "Artello Hellas",
    number: "040-1234565"
},
{
    id:2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
},
{
    id:3,
    name: "Dan Abramov",
    number: "12-43-234345"
},
{
    id:4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
}
]



app.get('/api/persons',(request,response)=>{
    response.json(persons)
})

app.get('/info',(request,response)=>{
    response.send(`<p> Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>`)
})
app.get('/api/persons/:id',(request,response)=>{
    const id = Number(request.params.id)
    const person =persons.find(item=>item.id===id)
    if(person){
        response.json(person)
    } else{
        response.status(404).end()
    }

})
app.delete('/api/persons/:id',(request,response)=>{
    const id =Number(request.params.id) 
    persons=persons.filter(n=>n.id !== id)
    console.log(`${id} deleted`)
    response.status(204).end()
})

const generateId=()=>{
 const maxId = persons.length > 0 ? Math.max(...persons.map(n=>n.id)) : 0
 const random = (Math.random() * 10).toFixed()
 return maxId + random

}

app.post('/api/persons',(request,response)=>{

    const body = request.body
    if(persons.find(person=>person.name === body.name)){
        return response.status(400).json({error:'name is already present'})

    } else if(!body.name || !body.number){
        return response.status(400).json({error:'name or number missing'})
    }

    const person ={
        id : generateId(),
        name: body.name,
        number:body.number
    }
    persons.concat(person)
    console.log(persons)
    response.json(person)

})


const PORT=3001
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
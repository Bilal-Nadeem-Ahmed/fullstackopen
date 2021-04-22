import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll=()=>{
    const req=axios.get(baseUrl)
    return req.then(res=>res.data)
}

const create = newObj=>{
    const req = axios.post(baseUrl,newObj)
    return req.then(res=>res.data)
}
const remove = id =>{
   const req= axios.delete(`http://localhost:3001/notes/${id}`)
   return req.then(res =>console.log(res))
}

export default {getAll,create,remove}
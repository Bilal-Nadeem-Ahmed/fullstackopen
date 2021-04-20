import  { useState,useEffect } from 'react';
import Filter from './Components/filter';
import PersonForm from './Components/personForm';
import Persons from './Components/persons';
import axios from 'axios'
function App() {
  const [ persons, setPersons ] = useState([]) 
  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then(res=>setPersons(res.data))

  },[])
  
  // const [ persons, setPersons ] = useState([
  //   { name: 'Arto Hellas', number: '07455483344' },
  //   { name: 'Ada Lovelace', number: '39-44-5323523' },
  //   { name: 'Dan Abramov', number: '12-43-234345' },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122' }
  // ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filterCriteria,setFilterCriteria] = useState('')
  const [filteredPerson,setFilteredPerson]=useState('')
  const [showFiltered, setShowFiltered]=useState(false)



  const checkIfPresent=(obj,x)=>{
    let arr=[]
    for(let i=0;i<obj.length;i++) {
      arr.push(obj[i].name)
    }
    if(arr.indexOf(x) !== -1){
       return true
      
    }
       
  }
  
  const handleClick=(e)=>{
    
    e.preventDefault()

    if(   checkIfPresent(persons,newName) ){
      alert(`${newName} is already added to Phonebook`)
      setNewName('')
    } else {
      const per={ name: newName,number :newNumber}
    setPersons(persons.concat(per))
    setNewName('')
    setNewNumber('')
    }
    
    
  }
  const handleChange=(e)=>{
    setNewName(e.target.value)

  }
  const handleChangeNumber=(e)=>{
    setNewNumber(e.target.value)

  }

  const handleChangeFilter=(e)=>{
    
    setFilterCriteria(e.target.value.toLowerCase())
    let lowerArr=[]
    let newArr =[]

    for(let i=0;i<persons.length;i++) {
     

      lowerArr.push((persons[i].name).toLowerCase())
      
        if(lowerArr[i].includes(filterCriteria)
        ){
          newArr.push(persons[i])
          setFilteredPerson(newArr)
          console.log(filteredPerson)
          setShowFiltered(true)
        }
    
    }
  
  }

  return (
    <div>
    <h2>Phonebook</h2>
    <Filter filterCriteria={filterCriteria} handleChangeFilter={handleChangeFilter}/>
    
    <h3>Add a new</h3>
    <PersonForm newName={newName} handleChange={handleChange} newNumber={newNumber} handleChangeNumber={handleChangeNumber} handleClick={handleClick}/>
   
    <h2>Numbers</h2>
    <Persons showFiltered={showFiltered} filteredPerson={filteredPerson} persons={persons}/>
    
  </div>);

  }
export default App;

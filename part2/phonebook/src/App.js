import  { useState } from 'react';

function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '07455483344' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
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
    <div>filter shown with <input value = {filterCriteria} onChange={handleChangeFilter}/></div>
    <br></br>
    <form>
      <div>
        name: <input value={newName} onChange={handleChange}  />
      </div>
      <div>number: <input value={newNumber} onChange={handleChangeNumber}/></div>

      <div>
        <button onClick={handleClick} type="submit">add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    {showFiltered ?  filteredPerson.map(item=> <p key={item.name}>{item.name} {item.number}</p>) : persons.map(item=> <p key={item.name}>{item.name} {item.number}</p> )}
  
    
  </div>);

  }
export default App;

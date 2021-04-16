import  { useState } from 'react';

function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const checkIfPresent=(obj,x)=>{
    let arr=[]
    for(let i=0;i<obj.length;i++) {
      arr.push(obj[i].name)
    }
    if(arr.indexOf(x) !== -1){
       return true
      
    }
       
  }
  //  checkIfPresent(persons,'Arto Hellas') 
  
  const handleClick=(e)=>{
    
    e.preventDefault()

    if(   checkIfPresent(persons,newName) ){
      alert(`${newName} is already added to Phonebook`)
      setNewName('')
    } else {
      const per={ name: newName}
    setPersons(persons.concat(per))
    setNewName('')
    }
    
    
  }
  const handleChange=(e)=>{
    setNewName(e.target.value)

  }


  return (
    <div>
    <h2>Phonebook</h2>
    <form>
      <div>
        name: <input value={newName} onChange={handleChange}  />
      </div>
      <div>
        <button onClick={handleClick} type="submit">add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    
      {persons.map(item=> <p key={item.name}>{item.name}</p>)}
    
    
  </div>);
}

export default App;

import  { useState } from 'react';

function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const handleClick=(e)=>{
    e.preventDefault()
    const per={ name: newName}
    setPersons(persons.concat(per))
    // console.log(persons)
    setNewName('')
    
  }
  const handleChange=(e)=>{
    // console.log(newName)
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

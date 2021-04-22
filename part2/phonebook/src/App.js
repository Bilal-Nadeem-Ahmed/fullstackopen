import  { useState,useEffect } from 'react';
import Filter from './Components/filter';
import Message from './Components/message';
import PersonForm from './Components/personForm';
import Persons from './Components/persons';
import server from './services/phonebook'
function App() {
  const [ persons, setPersons ] = useState([]) 
  useEffect(()=>{
    server.getAll()
    .then(people=>setPersons(people))

  },[])
  
 
  const [ newName, setNewName ] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filterCriteria,setFilterCriteria] = useState('')
  const [filteredPerson,setFilteredPerson]=useState('')
  const [showFiltered, setShowFiltered]=useState(false)
  const [errorMessage,setErrorMessage]=useState(null)
  const [errorMessageType,setErrorMessageType]=useState('green')



  const checkIfPresent=(obj,x)=>{
    let arr=[]
    for(let i=0;i<obj.length;i++) {
      arr.push(obj[i].name)
    }
    if(arr.indexOf(x) !== -1){
       return true
      
    }
       
  }
  const handleupdate=(val)=>{
    const idOf=persons.filter(item=>item.name===val)
    const per={ name: newName,number :newNumber}
    server.update(idOf[0].id,per).then(
      res=>{
        
        setPersons(persons.map(person=>person.id !==idOf[0].id ? person :res.data))
        setErrorMessageType('green')
        setErrorMessage(
          ` ${newName}'s contact information was updated!`
        )
        setTimeout(() => {
          setErrorMessageType('green')
          setErrorMessage(null)
        }, 3000)

      }
    ).catch(error=>{
      setErrorMessageType('red')

      setErrorMessage(
        ` ${error} Error!`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    })
    console.log(idOf[0].id)
    setNewName('')
    setNewNumber('')

  }

  
  
  const handleClick=(e)=>{
    
    e.preventDefault()

    if(   checkIfPresent(persons,newName) ){
      window.confirm(`${newName} is already added to Phonebook, would you like to update`)?  handleupdate(newName) : setNewName('')
    } else {
      const per={ name: newName,number :newNumber}
      server.create(per).then((res)=>{
        setPersons(persons.concat(res))
        setNewName('')
        setNewNumber('')
        setErrorMessage(
          `'${newName}' was added to the phonebook`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      }

      )
  
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
    {errorMessage ? <Message mstyle={errorMessageType} message={errorMessage}/>:null}
    
    <Filter filterCriteria={filterCriteria} handleChangeFilter={handleChangeFilter}/>
    
    <h3>Add a new</h3>
    <PersonForm newName={newName} handleChange={handleChange} newNumber={newNumber} handleChangeNumber={handleChangeNumber} handleClick={handleClick}/>
   
    <h2>Numbers</h2>
    <Persons showFiltered={showFiltered} filteredPerson={filteredPerson} setErrorMessageType={setErrorMessageType} setErrorMessage={setErrorMessage} setPersons={setPersons} persons={persons}/>
    
  </div>);

  }
export default App;

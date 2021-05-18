import server from '../../../../services/phonebook'
const DeleteButton = ({id, persons,setPersons,setErrorMessage,setErrorMessageType}) => {

    const confirmDelete=()=>{
        server.remove(id).then(res=>{
            
            setPersons(persons.filter(per=> per.id!== id))
            setErrorMessageType('green')
            setErrorMessage(`This person has been Deleted`)
        }).catch(err=>{
            setErrorMessageType('red')
            setErrorMessage(`Error, this person has already been Deleted`)
            setPersons(persons.filter(per=> per.id!== id))

            setTimeout(() => {
                setErrorMessage(null)
              }, 3000)
        })

    }
    const handleClick =  (e)=>{
        e.preventDefault()
        window.confirm('are you sure you want to delete this person?') ? confirmDelete():console.log('maybe not')
        
    }
    return ( <button onClick ={handleClick}> delete</button> );
}
 
export default DeleteButton;
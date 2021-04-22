import server from '../../../../services/phonebook'
const DeleteButton = ({id, persons,setPersons}) => {

    const confirmDelete=()=>{
        server.remove(id).then(res=>{
            
            setPersons(persons.filter(per=> per.id!== id))
            console.log('person actually deleted')
        })

    }
    const handleClick =  (e)=>{
        e.preventDefault()
        window.confirm('are you sure you want to delete this person?') ? confirmDelete():console.log('maybe not')
        
    }
    return ( <button onClick ={handleClick}> delete</button> );
}
 
export default DeleteButton;
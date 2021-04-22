import DeleteButton from "./subcomponents/deletebtn"


const Persons = ({showFiltered,filteredPerson,setPersons, persons}) => {
    return ( 
        <>
        {showFiltered ?  filteredPerson.map(item=> <p key={item.name}>{item.name}  {item.number} <DeleteButton persons={persons} setPersons={setPersons} id={item.id}/> </p>) : persons.map(item=> <p key={item.name}>{item.name} {item.number}<DeleteButton persons={persons} setPersons={setPersons} id={item.id}/></p> )}
        </>

     );
}
 
export default Persons;
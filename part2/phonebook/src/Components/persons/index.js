const Persons = ({showFiltered,filteredPerson,persons}) => {
    return ( 
        <>
        {showFiltered ?  filteredPerson.map(item=> <p key={item.name}>{item.name} {item.number}</p>) : persons.map(item=> <p key={item.name}>{item.name} {item.number}</p> )}
        </>

     );
}
 
export default Persons;
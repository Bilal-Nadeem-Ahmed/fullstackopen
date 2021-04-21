const Search = ({setSearch}) => {

    

    const handleChange =(e)=>{
        setSearch(e.target.value)
    }
    
    return ( <>find countries <input onChange={handleChange} type='text'/> </>);
}
 
export default Search;
const Filter = ({filterCriteria,handleChangeFilter}) => {
    return ( 
        <>
        <div>filter shown with <input value = {filterCriteria} onChange={handleChangeFilter}/></div>
        <br></br>
        </>
     );
}
 
export default Filter;
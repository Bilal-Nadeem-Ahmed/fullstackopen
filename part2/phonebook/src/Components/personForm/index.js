const PersonForm = ({newName,handleChange,newNumber,handleChangeNumber,handleClick}) => {
    return ( 
        <form>
      <div>
        name: <input value={newName} onChange={handleChange}  />
      </div>
      <div>number: <input value={newNumber} onChange={handleChangeNumber}/></div>

      <div>
        <button onClick={handleClick} type="submit">add</button>
      </div>
    </form>
     );
}
 
export default PersonForm;
const Single = ({selected}) => {
    return ( 
        <>
        <h1>{selected.name}</h1>
        <p>Capital {selected.capital}</p>
        <p>Population {selected.population}</p>
        <h2>Languages</h2>
        <ul>
        {selected.languages.map(item=>
          <li key={item.name}>{item.name}</li>
          )}
          </ul>
          <img alt={selected.name} src={selected.flag}/>
        

        </>
     );
}
 
export default Single;
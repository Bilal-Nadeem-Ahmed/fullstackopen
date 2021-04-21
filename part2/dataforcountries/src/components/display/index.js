import Multiple from "./subcomponents/multiple"
import Single from "./subcomponents/single"

const Display = ({filteredCountries}) => {

    
        if(filteredCountries.length >10){
          return <p>Too many matches</p>
        } else if(filteredCountries.length===1){
          return (
              <Single selected ={filteredCountries[0]}/>
       
          )
        } else {
            return <>
          {filteredCountries.map(item=> <Multiple key={item.name} item={item}/>)}
          </>
        }
      
      
}
 
export default Display;
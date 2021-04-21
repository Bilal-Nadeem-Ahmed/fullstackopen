import axios from 'axios'
import {useEffect,useState} from 'react'
import Display from './components/display'
import Search from './components/search'

function App() {

  const [data,setData]=useState([])
  const[search,setSearch]=useState('')
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res=>{
      
      setData(res.data)
  })
  .catch(err=>console.log(err))
  }, [])

  const filteredCountries=data.filter(item=>{
    return item.name.indexOf(search) !== -1
  })

  const returnVal=()=>{
    if(filteredCountries.length >10){
      return <p>Too many matches</p>
    } else if(filteredCountries.length===1){
      return <p>{filteredCountries[0]}</p>
    } else {
      filteredCountries.map(item=><p key={item.name}>{item.name}</p>)
    }
  }
  

  return (
    <div className="App">
     
        <Search
        
        setSearch={setSearch}/>

        {/* { filteredCountries.length>10? <p>Too many matches</p>: filteredCountries.map(item=><p key={item.name}>{item.name}</p>)} */}
     <Display filteredCountries={filteredCountries}/>
    
    </div>
  );
}

export default App;

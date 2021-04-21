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

 

  return (
    <div className="App">
     
      <Search
       setSearch={setSearch}/>

     <Display 
     filteredCountries={filteredCountries}/>
    
    </div>
  );
}

export default App;

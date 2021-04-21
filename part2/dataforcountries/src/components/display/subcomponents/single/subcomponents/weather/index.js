import {useState,useEffect} from 'react'
import axios from 'axios'
import ShowWeather from './subcomponents/showweather'
const Weather = ({capital}) => {
    const [data,setData]=useState(null)
    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
        .then(res=>{
          setData(res.data)
      })
      .catch(err=>console.log(err))
      }, [])
    
      


    
    return  (
        <>
        {data ? <ShowWeather data={data}/>: <p>Loading Weather data....</p> }
        </>
        );
}
 
export default Weather;
import {useState} from 'react'
import Single from '../single'
const Multiple = ({item}) => {
    const[selected,setSelected]=useState(false)
    const handleClick=()=>{
        setSelected(!selected)
        console.log(item,selected)}
    
    return ( 
        <>
        <p>{item.name}</p>
        <button onClick={handleClick}>Show</button>
        {selected ? <Single selected={item}/>:null}
        </>
     );
}
 
export default Multiple;
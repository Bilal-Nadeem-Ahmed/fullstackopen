const Total = ({parts}) => {
    const getNumber=(x)=>{
        const arr=[]
        for(let i=0;i < x.length;i++){
            arr.push(x[i].exercises)
        }
        return arr.reduce((a,b)=>a+b)
    }
    
    
    
    return ( <>
    <p><b>Total of {getNumber(parts)} exercises</b></p>
    </> );
}
 
export default Total;
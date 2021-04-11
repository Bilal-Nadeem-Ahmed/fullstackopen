const Total = ({parts}) => {
    const getNumber=(x)=>{
        const arr=[]
        for(let i=0;i < x.length;i++){
            arr.push(x[i].exercises)
        }
        return arr
    }
    const total=getNumber(parts).reduce((a,b)=>a+b)
    
    return ( <>
    <p><b>Total of {total} exercises</b></p>
    </> );
}
 
export default Total;
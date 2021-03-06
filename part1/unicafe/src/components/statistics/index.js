import Statistic from "../statistic"

const Statistics = ({good,neutral,bad}) => {
    const total=good +neutral+bad
    const average = (good - bad )/ total
    const positive = (good /total) * 100 
    
    if( total <1) {
        return <p>No Feedback given</p>
    }

    return (  <>
    <table>
        <thead>
            <tr>
                <th>Statistics</th>
            </tr>
        </thead>
        <tbody>
            <Statistic text ='good' value ={good}/>
            <Statistic text ='neutral' value ={neutral}/>
            <Statistic text ='bad' value ={bad}/>
            <Statistic text ='total' value ={total}/>
            <Statistic text ='average' value ={average}/>
            <Statistic text ='positive' value ={`${positive} %`}/>
        </tbody>
       
        
        
    </table>
     
  
    </>
    )
}
 
export default Statistics;
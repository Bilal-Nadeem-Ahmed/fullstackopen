const Statistics = ({good,neutral,bad}) => {
    const total=good +neutral+bad
    const average = (good - bad )/ total
    const positive = (good /total) * 100 
    if( total <1) {
        return <p>No Feedback given</p>
    }

    return (  <>
     <h2>Statistics</h2>
      <p> good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {average?average :0}</p>
      <p>positive {positive? positive: 0} %</p>
    </>
    )
}
 
export default Statistics;
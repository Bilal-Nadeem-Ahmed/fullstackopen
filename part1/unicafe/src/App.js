import './App.css';
import {useState} from 'react'
import Button from './components/button';

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total=good +neutral+bad
  const average = (good - bad )/ total
  const positive = (good /total) * 100 
  const handleClick=(x,y)=>y(x+1)
  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <Button title='good' handleClick={()=>handleClick(good,setGood)}/>
      <Button title='neutral' handleClick={()=>handleClick(neutral,setNeutral)}/>
      <Button title='bad' handleClick={()=>handleClick(bad,setBad)}/>
      <h2>Statistics</h2>
      <p> good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {average?average :0}</p>
      <p>positive {positive? positive: 0} %</p>
    </div>
  );
}

export default App;

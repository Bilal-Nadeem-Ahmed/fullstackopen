import './App.css';
import {useState} from 'react'
import Button from './components/button';

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
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
    </div>
  );
}

export default App;

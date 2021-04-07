import './App.css';
import {useState} from 'react'
import Button from './components/button';
import Statistics from './components/statistics';

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feedback,setFeedback]=useState(false)
  const handleClick=(x,y)=>(y(x+1),setFeedback(true))
  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <Button title='good' handleClick={()=>handleClick(good,setGood)}/>
      <Button title='neutral' handleClick={()=>handleClick(neutral,setNeutral)}/>
      <Button title='bad' handleClick={()=>handleClick(bad,setBad)}/>
     {feedback? <Statistics good={good} neutral={neutral} bad ={bad}/> : null}
      
    </div>
  );
}

export default App;

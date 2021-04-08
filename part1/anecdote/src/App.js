import React, { useState } from 'react'
import Button from './components/button';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
 
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 const handleClick=()=>{
   const random=getRandomInt(0,anecdotes.length-1)
   
   setSelected(random)
 }
 const handleVotes =()=>{
   const copy = [...votes]
   copy[selected] +=1;
   setVotes([...copy])
   const indexOfMaxValue = votes.indexOf(Math.max(...votes));
 setMax(indexOfMaxValue)
 }


   
  const [selected, setSelected] = useState(0)
  const [votes,setVotes]=useState([...anecdotes.map(()=>0)])
  const [max,setMax]=useState(0)
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <br/>
      <Button text='next Anecdote' onClick={handleClick}/>
      <Button text='vote' onClick={handleVotes}/>
      <h1>Anecdote with most votes</h1>
      {anecdotes[max]}
      <p>has {votes[max]} votes</p>
      
    </div>
  )
}

export default App
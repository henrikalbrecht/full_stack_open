import { useState } from 'react'
const Statistics = ([good, neutral, bad]) =>{
  return (
    <h2>statistics</h2>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {total}</p>
    <p>average {(good*1+neutral*0+bad*-1)/total}</p>
    <p>positive % {good/total}</p>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

const goodFeedback = () => {
  setGood(good+1)
  setTotal(total+1)
}
const neutralFeedback = () => {
  setNeutral(neutral+1)
  setTotal(total+1)
}

const badFeedback = () => {
  setBad(bad+1)
  setTotal(total+1)
}  

  return (
    <div><h1>give feedback</h1>
    <button onClick={goodFeedback} >{"good"}</button>
    <button onClick={neutralFeedback} >{"neutral"}</button>
    <button onClick={badFeedback} >{"bad"}</button>
    <Statistics good ={good} neutral ={neutral} bad={bad} />
    </div>
  )
}

export default App
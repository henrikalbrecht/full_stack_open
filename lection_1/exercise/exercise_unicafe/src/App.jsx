import { useState } from 'react'

const Statistics = ({ good, neutral, bad, total }) => {
  console.log({ good }, { neutral }, { bad })
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={(good * 1 + neutral * 0 + bad * -1) / total}/>
      <StatisticLine text="positive %" value={good/total}/>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({ feedback, text }) => {
  <flexDirection:row></flexDirection:row>
  return (
    <div>
      <button onClick={feedback} >{text}</button>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const goodFeedback = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  const neutralFeedback = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const badFeedback = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div><h1>give feedback</h1>
      <Button feedback={goodFeedback} text="good" />
      <Button feedback={neutralFeedback} text="neutral" />
      <Button feedback={badFeedback} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App
import { useState } from 'react'

const Button = ({ name, usecase }) => {
  return (
    <div>
      <button onClick={usecase}>{name}</button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [pointsarray, setPointsArray] = useState(new Uint8Array(8))
  const [mostVotesIndex, setMostVotesIndex] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)

  const randomize_anecdote = () => setSelected(Math.floor(Math.random() * 8))

  const vote_for_quote = () => {
    const updatedPointsArray = [...pointsarray]
    updatedPointsArray[selected] += 1
    setPointsArray(updatedPointsArray)
    console.log(mostVotes)
    if (updatedPointsArray[selected] > mostVotes){
      setMostVotes(updatedPointsArray[selected])
      setMostVotesIndex(selected)
    }
    console.log(mostVotes)

    console.log(mostVotes)
  }

  return (
    <div>
      <p>Anecdote of the day</p>
      {anecdotes[selected]}
      <p>The current anecdote has {pointsarray[selected]} votes</p>
      <Button name="vote" usecase={vote_for_quote} />
      <Button name="next anecdote" usecase={randomize_anecdote} />
      <p>Anecdote with most votes</p>
      {anecdotes[mostVotesIndex]}
    </div>
  )
}

export default App

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Header1 = ({text}) => <div><h1>{text}</h1></div>

const App = ({anecdotes}) => {
  const anectodesLen=anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState((Array(anectodesLen).fill(0)))

  const handleVote = () => {
    const newVotes=[...votes]
    newVotes[selected]++
    setVotes(newVotes)
  }

  const handleNext = () => setSelected(Math.floor(Math.random() * anectodesLen))

  return (
    <>
      {console.log(votes.indexOf(Math.max(...votes)))}
      <Header1 text={'Anecdote of the Day'} />
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {votes[selected]} votes</p>
      <p>
        <Button onClick={handleVote} text={'Vote'} />
        <Button onClick={handleNext} text={'Next Anecdote'} />
      </p>
      <Header1 text={'Highest Voted Anecdote'}/>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)